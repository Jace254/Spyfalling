import './App.css'
import React, { useState } from 'react'
import {loadStdlib} from '@reach-sh/stdlib'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import * as backend from './reach/build/index.main.mjs'
import Connect from './Connect'
import ConnectWallet from './ConnectWallet'
import Chat from './Chat/Chat'
import Rules from './Rules'
import GameSettings from './GameSettings/GameSettings'
import Menu from './Menu/Menu'
import Error from './Error'
import Locations from './Locations'
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
  const [WRole, setWRole] = useState(null)

  // const [onMessageCallback, setOnMessageCallback] = useState();
  // const [disconnect,setDisconnect] = useState();
  // const [onDisconnect,setOnDisconnect] = useState();


  const [account, setAccount] = useState({})

  async function showBalance(account){
    const balAtomic = await reach.balanceOf(account);
    const bal = reach.formatCurrency(balAtomic, 4);
    return bal;
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
        const contract = account.contract(backend);
        await reach.withDisconnect(() => Promise.all([
          backend.Admin(contract, {
            setParams: parameters,
            ready: () => {
              console.log(`Admin disconnected as Participant`);
              reach.disconnect(null);
            }
          })
        ]))
        const ctcInfo = JSON.stringify(await contract.getInfo())
        console.log(JSON.parse(ctcInfo))
        return ctcInfo;
      },

      // attach: (contractInfo) => { 
      //   const contract = account.contract(backend, JSON.parse(contractInfo));
      //   backend.Bob(contract, Player)
      //   // setView(views.ATTACHING)
      // }
    }

    function disconnect () {
      resetAll()
      connectionManager.disconnect()
    }
    // setDisconnect(() => disconnect);

    const onDisconnect = () => {
      resetAll()
      setError('Connection to server closed')
    }
    // setOnDisconnect(() => onDisconnect);

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
          const ctcInfo = await reachFuncs.deploy(data.sessionNumP,data.sessionWager,data.sessionRounds);
          connectionManager.send("set-ctc", { ctc: ctcInfo })
        }
        setError('')
        // TODO replace window.location.hash with ?code=
        window.location.hash = data.sessionId
      } 
    }
    // setOnMessageCallback(() => onMessageCallback)


  

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
                  <Chat
                    connectionManager={connectionManager}
                    chatContent={chatContent}
                    isActive={isTimerActive}
                    timer={timer}
                    setTimer={setTimer}
                    gameDuration={gameDuration}
                  />
                  <Locations locations={locations} />
                  <GameSettings
                    connectionManager={connectionManager}
                    disconnectCallback={disconnect}
                    readyCheck={readyCheck}
                    setReadyCheck={setReadyCheck}
                    lobbyStatus={lobbyStatus}
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
