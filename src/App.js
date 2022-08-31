import './App.css'
import React, { useState } from 'react'
import {loadStdlib} from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import * as backend from './reach/build/index.main.mjs'
import {Connect,ConnectWallet} from './views'
import Rules from './components/Rules'
import GameSettings from './GameSettings/GameSettings'
import Menu from './Menu/Menu'
import Error from './components/Error'
import ConnectionManager from './connection-manager.js'



const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }))

const gameDuration = 300;

const connectionManager = new ConnectionManager(reach)

function App () {
  const [walletMode, setWalletMode] = useState(false);
  const [gameMode, setGameMode] = useState(false)
  const [error, setError] = useState('')
  const [chatContent, setChatContent] = useState([])
  const [readyCheck, setReadyCheck] = useState(false)
  const [lobbyStatus, setLobbyStatus] = useState()
  const [locations, setLocations] = useState([])
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [timer, setTimer] = useState(gameDuration)
  const [Winner, setWinner] = useState(null)
  const [paramsG, setParamsG] = useState();


  const [account, setAccount] = useState({})
  //views
  const [createdGame, setCreatedGame] = useState(false);
  const [optedIn, setOptedIn] = useState(false);
  const [paramsSet,setParamsSet] = useState(false);
  const [finishedUp,setFinisedUp] = useState(false);
  const [acceptedWager,setAcceptedWager] = useState(false);

  async function showBalance(account){
    const balAtomic = await reach.balanceOf(account);
    const bal = reach.formatCurrency(balAtomic, 4);
    return bal;
  }

  async function call(f,dom = null) {
    let res = undefined;
    try {
      res = await f(dom);
      console.log(`res`, res);
      return res;
    } catch (e) {
      res = [`err`, e]
      console.log(`res`, res);
      return false;
    }
  }

  const reachFuncs = {
    connect: async (playerType) => {
      let result = ""
      let account;
      try {
        account = await reach.getDefaultAccount();
        result = 'success'
      } catch (error) {
        result = 'failed';
      }
      return {result,account};
    },

    deploy: async (numPlayers,amt,rounds) => {
      const parameters = {
        numPlayers: numPlayers,
        amt: reach.parseCurrency(amt),
        rounds: rounds
      }
      setParamsG({numPlayers: numPlayers,amt: amt,rounds: rounds});
      const contract = account.contract(backend);
      setCreatedGame(true);
      await reach.withDisconnect(() => Promise.all([
        backend.Admin(contract, {
          setParams: parameters,
          ready: () => {
            console.log(`Admin disconnected as Participant`);
            reach.disconnect(null);
          }
        })
      ]))
      setOptedIn(true);
      setParamsSet(true);
      const ctcInfo = await contract.getInfo()
      console.log(ctcInfo)
      return {contract,ctcInfo};
    },

    attachGame: async (secret, contractInfo) => {
      const account = await reach.newAccountFromMnemonic(secret.trim())
      console.log(await showBalance(account))
      const canFund = await reach.canFundFromFaucet()
      if(canFund) {
        console.log(`Can Fund`);
        const faucet = await reach.getFaucet()
        const balanceOfFaucet = await showBalance(faucet)
        const fmtBal = reach.formatCurrency(balanceOfFaucet, 4)
        console.log(`Faucet balance ${fmtBal}`)

        console.log(`Funding`)
        await reach.fundFromFaucet(reach.parseCurrency(fmtBal - 0.5))
        console.log(`Funded`)
      } else {
        console.log(`Cannot fund`);
      }
      console.log(await showBalance(account))
      const contract = account.contract(backend, contractInfo);
      return contract;
    },

    attachPlayer: (contractInfo) => { 
      const contract = account.contract(backend, contractInfo);
      return contract;
    },

    join: (playerCtc) => {
      call(playerCtc.apis.Player.join);
    },

    wager: (playerCtc) => {
      call(playerCtc.apis.Player.wager);
    },

    getNum: (playerCtc,num) => {
      call(playerCtc.apis.Player.getNum,num);
    },

    checkWin: (playerCtc) => {
      const isWinner = call(playerCtc.apis.Player.checkWin);
      return isWinner;
    }
  }

  function disconnect () {
    resetAll()
    connectionManager.disconnect()
  }

  const onDisconnect = () => {
    resetAll()
    setError('Connection to server closed')
  }

  async function onMessageCallback (type, data) {
    if (type === 'chat-event') {
      appendText(data.message, data.author, data.color)
    } else if (type === 'session-broadcast') {
      setLobbyStatus(data)
    } else if (type === 'start-game') {
      startGame(data)
    } else if (type === 'session-created') {
      setGameMode(true)
      console.log(data)
      if( data.playerType === 'Admin') {
        //Admin deploys game
        const deployment = await reachFuncs.deploy(data.sessionNumP,data.sessionWager,data.sessionRounds);
        connectionManager.send("set-ctc", { ctc: deployment.ctcInfo });
        connectionManager.send("set-player-ctc", { playerContract: deployment.contract})
        //Game attaches
        const gameContract = await reachFuncs.attachGame('harvest immune derive hobby pyramid behave you wedding tragic mouse demand harvest climb vicious world bullet gloom bacon border aspect burden immense relief able area',deployment.ctcInfo)
        console.log(gameContract)
        connectionManager.send("set-game-ctc", {gameContract: gameContract})
        //send reach events to server
        const ev = await deployment.contract.events.GamePhase.phase
        console.log(ev);
        connectionManager.send("set-reach-events",{events: ev});
        //admin joins as player in contract
        reachFuncs.join(deployment.contract);
        console.log(`Admin joined as Player 1`);
        setFinisedUp(true);
      } else if (data.playerType === 'Player'){
        const playerContract = reachFuncs.attachPlayer(data.sessionCtc)
        console.log(playerContract)
        connectionManager.send("set-player-ctc", { playerContract: playerContract})
        reachFuncs.join(playerContract);
      }
      setError('')
      // TODO replace window.location.hash with ?code=
      // window.location.hash = data.sessionId
    } 
  }

  function resetClickableElements () {
    document
      .querySelectorAll('.strike')
      .forEach((elem) => elem.classList.remove('strike'))
  }

  const chatSize = 11
  function appendText (text, author, color) {
    const newRow = { text: text, author: author, color: color }
    setChatContent((previousContent) => {
      // Trim the chat if it's too long
      if (previousContent.length >= chatSize) {
        return [
          ...previousContent.splice(
            previousContent.length - chatSize + 1,
            previousContent.length
          ),
          newRow
        ]
      } else {
        return [...previousContent, newRow]
      }
    })
  }

  async function startGame (data) {
    window.scrollTo(0, 0)
    setChatContent([])
    setReadyCheck(false)
    setLocations(data.locations)
    resetClickableElements()
    setIsTimerActive(true)
    appendText('Game started')
    if (data.spy) {
      appendText(
        '🕵️ You are the spy, try to guess the current location',
        null,
        'red'
      )
    } else {
      appendText(
        `😇 You are not the spy, the location is ${data.location}`,
        null,
        'blue'
      )
    }

    appendText(`First player: ${data.first}`)
  }

  function resetAll () {
    setError('')
    setGameMode(false)
    setReadyCheck(false)
    setLobbyStatus()
    resetClickableElements()
    setIsTimerActive(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className='App'>
      <Menu />
      <div className='container mb-5 pt-3'>
        <Error error={error} />
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4'>
          {walletMode 
          ? (
              <>
              {gameMode
              ? (
                <>
                  <GameSettings
                    connectionManager={connectionManager}
                    chatContent={chatContent}
                    isActive={isTimerActive}
                    timer={timer}
                    setTimer={setTimer}
                    locations={locations}
                    gameDuration={gameDuration}
                    disconnectCallback={disconnect}
                    readyCheck={readyCheck}
                    setReadyCheck={setReadyCheck}
                    lobbyStatus={lobbyStatus}
                    createdGame={createdGame}
                    paramsG={paramsG}
                    optedIn={optedIn}
                    paramsSet={paramsSet}
                    finishedUp={finishedUp}
                    acceptedWager={acceptedWager}
                  />
                </>
                )
              : (
                <Connect
                  setGameMode={setGameMode}
                  connectionManager={connectionManager}
                  onDisconnect={onDisconnect}
                  onMessageCallback={onMessageCallback}
                />
                )}
                </>
            )
          : (
            <ConnectWallet
            connect={reachFuncs.connect}
            setWalletMode={setWalletMode}
            setAccount={setAccount}
            />
            )
          }
          <Rules />
        </div>
      </div>
    </div>
  )
}

export default App
