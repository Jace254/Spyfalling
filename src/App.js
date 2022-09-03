import React, { useState } from 'react'
import {loadStdlib} from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import * as backend from './reach/build/index.main.mjs'
import {Connect,ConnectWallet} from './views'
import {Menu,Error,Rules,GameSettings} from './components'
import ConnectionManager from './connection-manager.js'

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({providerEnv: {
  ALGO_TOKEN: '',
  ALGO_SERVER: "https://testnet-api.algonode.cloud",
  ALGO_PORT: '',
  ALGO_NODE_WRITE_ONLY: 'no',

  ALGO_INDEXER_TOKEN: '',
  ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
  ALGO_INDEXER_PORT: '443',
}, MyAlgoConnect }))

const gameDuration = 600;
let contractP;
let gameCtc;
// let ev;

const connectionManager = new ConnectionManager();

const GAME_ACCOUNT = process.env.GAME_ACCOUNT || process.env.REACT_APP_GAME_ACCOUNT;

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
  const [winner,setWinner] = useState();
  const [name, setName] = useState('');
  const [wager,setWager] = useState();
  const [pType, setPType] = useState('Admin');


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

  async function call(f,dom) {
    let res = undefined;
    try {
      if (dom){
        res = await f(dom);
      } else {
        res = await f();
      }
      return 'success';
    } catch (e) {
      res = [`err`, e]
      console.log(`res`, res);
      return 'failed';
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
      const contract = account.contract(backend);
      setCreatedGame(true);
      await reach.withDisconnect(() => Promise.all([
        backend.Admin(contract, {
          setParams: parameters,
          ready: () => {
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
    join: async () => {
      const res = await call(contractP.apis.Player.join);
      // const ev = await contractP.events.GamePhase.phase.next();
      return {res};
    },

    wager: async () => {
      const res = await call(contractP.apis.Player.wager);
      return {res};
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
  async function onMessageCallback (type, data,callback) {
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
      setWager(data.sessionWager)
      if( data.playerType === 'Admin') {
        //Admin deploys game and Game attaches
        const deployment = await reachFuncs.deploy(GAME_ACCOUNT,data.sessionNumP,data.sessionWager,data.sessionRounds);
        connectionManager.send("set-ctc", { ctc: deployment.ctcInfo });
        contractP = deployment.contract;
        gameCtc = deployment.gameContract;
        //send reach events to server
        const ev = await deployment.contract.events.GamePhase.phase.next();
        connectionManager.send("set-reach-events",{events: ev});
        setFinisedUp(true);
      } else if (data.playerType === 'Player') {
        contractP = reachFuncs.attachPlayer(data.sessionCtc);
      }
      if(data.sessionId === null) {
        setGameMode(false);
        setError('No such Lobby')
      } else {
        setError('')
      }

      
    } else if ( type === 'reach-callback') {
      //TO DO player function handling
      phase = data.phases.what[0][0]
      console.log(phase);
      // eslint-disable-next-line default-case
      switch(phase) {
        case 'Joining':
          connectionManager.send("chat-event", {
            message: `${data.cliName} is joining the game contract as player ${data.cliIdx}`,
            color: "blue",
          });
          if(data.cliName.substring(3) === name) {
            const joinData = await reachFuncs.join();
            console.log(joinData.res);
            let id;
            let ev;
            let response;
            if(data.cliIdx === data.participants){
              id = 1
              const what = [["Wagering",null]]
              console.log(what[0][0])
              ev = {what}
              response = {response: joinData.res,done: false,id: id ,events: ev }
            } else {
              id = data.cliIdx + 1
              response = {response: joinData.res,done: false,id: id}
            }
            connectionManager.send("reach-success",response);
          }
          break;

        case 'Wagering':
          connectionManager.send("chat-event", {
            message: `${data.cliName} is paying the wager`,
            color: "blue",
          });
          if(data.cliName.substring(3) === name) {
            const wagerData = await reachFuncs.wager();
            let response;
            let id;
            if(data.cliIdx === data.participants) {
              id = 1
              response = {response: wagerData.res,done: true,id: id}
            } else {
              id = data.cliIdx + 1
              response = {response: wagerData.res,done: false,id: id}
            }
            connectionManager.send("reach-success",response);
          } 
          break;

        case 'Finished':
          console.log('Finished');
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
                    setGameMode={setGameMode}
                    setError={setError}
                    createdGame={createdGame}
                    optedIn={optedIn}
                    paramsSet={paramsSet}
                    finishedUp={finishedUp}
                    acceptedWager={acceptedWager}
                    setAcceptedWager={setAcceptedWager}
                    setPType={setPType}
                    pType= {pType}
                    wager={wager}
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
