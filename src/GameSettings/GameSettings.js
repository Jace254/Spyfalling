import React from 'react'
import Card from '../components/Card'
import LobbyCode from './LobbyCode'
import NewGameForm from './NewGameForm'
import PlayersList from './PlayersList'
import Chat from '../Chat/Chat'
import Locations from '../components/Locations'
import { CreateGame,FinishingUp,OptIn,SettingParams } from '../views'


export default function GameSettings (props) {

  return (
    <>
    {props.createdGame 
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
            <Locations locations={props.locations} isSpy={props.isSpy} connectionManager={props.connectionManager}/>
            <Card
              className='border-secondary'
              header='<i class="fas fa-cog"></i> Settings'
            >
              <LobbyCode lobbyStatus={props.lobbyStatus} />
              <PlayersList lobbyStatus={props.lobbyStatus} isSpy={props.isSpy} connectionManager={props.connectionManager}/>
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
      : (<><OptIn params={props.paramsG}/></>) }</>)
    : (<><CreateGame/></>)
    }
      
    </>
    
  )
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
