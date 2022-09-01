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
reach.setWalletFallback(reach.walletFallback({      providerEnv: {
  ALGO_TOKEN: '',
  ALGO_SERVER: "https://testnet-api.algonode.cloud",
  ALGO_PORT: '',
  ALGO_NODE_WRITE_ONLY: 'no',
  
  ALGO_INDEXER_TOKEN: '',
  ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
  ALGO_INDEXER_PORT: '443',
}, MyAlgoConnect }))

const gameDuration = 600;

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
  const [timer, setTimer] = useState(gameDuration);
  const [winner,setWinner] = useState()
  const [name, setName] = useState('');
  const [pType, setPType] = useState('Admin');
  const [paramsG, setParamsG] = useState();


  const [account, setAccount] = useState({})

  //views for Admins
  const [createdGame, setCreatedGame] = useState(false);
  const [optedIn, setOptedIn] = useState(false);
  const [paramsSet,setParamsSet] = useState(false);
  const [finishedUp,setFinisedUp] = useState(false);

  //views for Player
  const [acceptedWager,setAcceptedWager] = useState(false);


  // eslint-disable-next-line no-unused-vars
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
    connect: async () => {
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

    deploy: async (secret,numPlayers,amt,rounds) => {
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
        }),
      ]))
      setOptedIn(true);
      setParamsSet(true);
      const ctcInfo = await contract.getInfo();
      //Game account
      const gameAccount = await reach.newAccountFromMnemonic(secret.trim())
      const gameContract = gameAccount.contract(backend, ctcInfo);
      setCreatedGame(true);
      Promise.all([
        backend.Game(contract, {
          getWinner: () => {
            return winner;
          }
        })
      ])
      return {gameContract,contract,ctcInfo};
    },

    attachPlayer: (contractInfo) => { 
      const contract = account.contract(backend, contractInfo);
      return contract;
    },

    // API funtions
    join: async (playerContract) => {
      const res = await call(playerContract.join);
      return res;
    },

    wager: async (playerContract) => {
      const res = await call(playerContract.wager);
      return res;
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

  let phase;
  async function onMessageCallback (type, data) {
    if (type === 'chat-event') {
      appendText(data.message, data.author, data.color)
    } else if (type === 'session-broadcast') {
      setLobbyStatus(data)
    } else if (type === 'start-game') {
      startGame(data)
    } else if (type === 'vote-result') {
      console.log(data)
      if(data.winLose) {
        setWinner(data.playerAddress);
      }
    } else if (type === 'session-created') {
      setGameMode(true)
      if( data.playerType === 'Admin') {
        //Admin deploys game and Game attaches
        const deployment = await reachFuncs.deploy(process.env.GAME_ACCOUNT || 'harvest immune derive hobby pyramid behave you wedding tragic mouse demand harvest climb vicious world bullet gloom bacon border aspect burden immense relief able area',data.sessionNumP,data.sessionWager,data.sessionRounds);
        connectionManager.send("set-ctc", { ctc: deployment.ctcInfo });
        connectionManager.send("set-player-ctc", { playerContract: deployment.contract.apis.Player})
        connectionManager.send("set-game-ctc", {gameContract: deployment.gameContract})
        console.log(name);
        //send reach events to server
        const ev = await deployment.contract.events.GamePhase.phase.next();
        connectionManager.send("set-reach-events",{events: ev});
        setFinisedUp(true);
      } else if (data.playerType === 'Player'){
        const playerContract = reachFuncs.attachPlayer(data.sessionCtc)
        connectionManager.send("set-player-ctc", { playerContract: playerContract});
      }
      setError('');

    } else if ( type === 'reach-callback') {
      //TO DO player function handling
      phase = data.events.what[0][0]
      // eslint-disable-next-line default-case
      switch(phase) {
        case 'Joining':
          console.log(data.cliName.substring(3))
          if(data.cliName.substring(3) === name) {
            const res = await reachFuncs.join(data.playerContract);
            connectionManager.send("reach-success", {response: res});
          } else {
            console.log(`${data.cliName} is joining the game contract`);
            connectionManager.send("reach-success", {response: 'failed'});
          }
          break;

        case 'Wagering':
          console.log(name);
          console.log(data.cliName)
          if(data.cliName === name) {
            const res = await reachFuncs.wager(data.playerContract);
            connectionManager.send("reach-success", {response: res});
          } else {
            console.log(`${data.cliName} is paying the wager`);
          }
          break;

        case 'Finished':
          break;
      }
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
                    pType= {pType}
                  />
                </>
                )
              : (
                <Connect
                  setGameMode={setGameMode}
                  connectionManager={connectionManager}
                  onDisconnect={onDisconnect}
                  onMessageCallback={onMessageCallback}
                  setName = {setName}
                  setPType = {setPType}
                  pType={pType}
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
