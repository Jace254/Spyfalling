import React from 'react'
import Card from '../Card'
import LobbyCode from './LobbyCode'
import NewGameForm from './NewGameForm'
import PlayersList from './PlayersList'
import Chat from '../Chat/Chat'
import Locations from '../Locations'
import { AcceptWager, CreateGame, FinishingUp, OptIn, SettingParams } from '../../views'


export default function GameSettings (props) {

  React.useEffect(() => {
    let interval = null
    if (props.isTimerActive) {
      interval = setInterval(() => {
        props.setTimer((seconds) => seconds - 1)
        if (props.timer <= 0) {
          clearInterval(interval)
        }
      }, 1000)
    } else if (!props.isTimerActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.timer, props.setTimer, props.isTimerActive, props])
 
  return (
    <>{props.pType === 'Admin'
      ? (<>{props.createdGame 
        ? (<>{props.optedIn 
          ? (<>{props.paramsSet 
            ? (<>{props.finishedUp 
              ? (<>
                <Chat
                  connectionManager={props.connectionManager}
                  chatContent={props.chatContent}
                  timer={props.timer}
                  gameDuration={props.gameDuration}
                />
                <Locations 
                locations={props.locations} 
                connectionManager={props.connectionManager}
                isSpy={props.isSpy}
                gameStarted={props.gameStarted}/>
                <Card
                  className='border-secondary'
                  header='<i class="fas fa-cog"></i> Settings'
                >
                  <LobbyCode lobbyStatus={props.lobbyStatus}/>
                  <PlayersList 
                  lobbyStatus={props.lobbyStatus} 
                  isSpy={props.isSpy}
                  connectionManager={props.connectionManager}
                  gameStarted={props.gameStarted}/>
                  <NewGameForm
                    readyCheck={props.readyCheck}
                    setReadyCheck={props.setReadyCheck}
                    connectionManager={props.connectionManager}
                  />
                  <hr />
                  <DisconnectButton disconnectCallback={props.disconnectCallback} />
                </Card>
              </>)
              : (<><FinishingUp/></>)}</>)
            : (<><SettingParams/></>)}</>) 
          : (<><OptIn params={props.paramsG}/></>)}</>)
        : (<><CreateGame/></>)}</>)
      : (<>{props.acceptedWager ? (
      <>      
      <Chat
        connectionManager={props.connectionManager}
        chatContent={props.chatContent}
        isActive={props.isTimerActive}
        timer={props.timer}
        setTimer={props.setTimer}
        gameDuration={props.gameDuration}
      />
      <Locations 
      locations={props.locations} 
      connectionManager={props.connectionManager}
      isSpy={props.isSpy}
      gameStarted={props.gameStarted}/>
      <Card
        className='border-secondary'
        header='<i class="fas fa-cog"></i> Settings'
      >
        <LobbyCode lobbyStatus={props.lobbyStatus} />
        <PlayersList 
        lobbyStatus={props.lobbyStatus} 
        isSpy={props.isSpy}
        connectionManager={props.connectionManager}
        gameStarted={props.gameStarted}/>
        <NewGameForm
          readyCheck={props.readyCheck}
          setReadyCheck={props.setReadyCheck}
          connectionManager={props.connectionManager}
          pType={props.pType}
        />
        <hr />
        <DisconnectButton disconnectCallback={props.disconnectCallback} />
      </Card>
      </>)
      :(<>
      <AcceptWager 
      wager={props.wager} 
      DisconnectButton={DisconnectButton} 
      disconnectCallback={props.disconnectCallback} 
      setAcceptedWager={props.setAcceptedWager}/>
      </>)}</>)}</>)
}

function DisconnectButton ({ disconnectCallback }) {
  return (
    <div className='d-grid'>
      <button
        className='btn btn-sm btn-outline-danger'
        onClick={() => disconnectCallback()}
      >
        <i className='fas fa-sign-out-alt' /> Leave lobby
      </button>
    </div>
  )
}
