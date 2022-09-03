import React from 'react'
import Card from '../Card'
import LobbyCode from './LobbyCode'
import NewGameForm from './NewGameForm'
import PlayersList from './PlayersList'
import Chat from '../Chat/Chat'
import Locations from '../Locations'
import { AcceptWager, CreateGame, FinishingUp, OptIn, SettingParams } from '../../views'


export default function GameSettings (props) {
 
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
                  isActive={props.isTimerActive}
                  timer={props.timer}
                  setTimer={props.setTimer}
                  gameDuration={props.gameDuration}
                />
                <Locations locations={props.locations} />
                <Card
                  className='border-secondary'
                  header='<i class="fas fa-cog"></i> Settings'
                >
                  <LobbyCode lobbyStatus={props.lobbyStatus}/>
                  <PlayersList lobbyStatus={props.lobbyStatus}/>
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
      <Locations locations={props.locations} />
      <Card
        className='border-secondary'
        header='<i class="fas fa-cog"></i> Settings'
      >
        <LobbyCode lobbyStatus={props.lobbyStatus} />
        <PlayersList lobbyStatus={props.lobbyStatus} />
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
      <AcceptWager wager={props.wager} DisconnectButton={DisconnectButton} disconnectCallback={props.disconnectCallback}/>
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
