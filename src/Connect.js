import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Connect (props) {
  const [disabled, setDisabled] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [lobbyID, setLobbyID] = useState('')
  const [numPlayers, setNumPlayers] = useState('')
  const [wager, setWager] = useState('')
  const [buttonText, setButtonText] = useState('🏠 Create Lobby')
  const [rounds, setRounds] = useState('')

  const handleSubmit = async (e) => {
    if(disabled){
      return;
    }
    setDisabled(true);
    e.preventDefault()
    props.setGameMode(true)
    let pType;
    if(buttonText === '🔌 Join Lobby') {
      pType = 'Player'
    } else {
      pType = 'Admin'
    }
    props.connectionManager.connect(
      playerName,
      lobbyID,
      wager,
      numPlayers,
      rounds,
      pType,
      props.onDisconnect,
      props.onMessageCallback
    )
  }

  const handleSwitch = (event) => {
    if (buttonText === '🔌 Join Lobby') {
      setButtonText('🏠 Create Lobby')
    } else  if (buttonText === '🏠 Create Lobby'){
      setButtonText('🔌 Join Lobby')
    } 
  }

  // Add Lobby ID to URL
  useEffect(() => {
    let windowHash = window.location.hash.split('#')[1]
    if (windowHash) {
      if (windowHash.length > 8) {
        windowHash = windowHash.substring(0, 8)
      }
      setLobbyID(windowHash.toUpperCase())
    }
  }, [])

  return (
    <Card className='text-dark bg-light border-primary'>
      <div className='d-grid'>
          <button type=' submit' className='btn btn-primary' onClick={handleSwitch}>
            Switch
          </button>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name-input' className='form-label'>
            <i className='fas fa-user' /> Name
          </label>
          <input
            id='name-input'
            type='text'
            className='form-control'
            required
            autoFocus
            maxLength='16'
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
        {buttonText === '🔌 Join Lobby' && 
          /* Lobby input */
          <div className='mb-3'>
          <label htmlFor='lobby-input' className='form-label'>
            <i className='fas fa-dice' /> Lobby code
          </label>
          <input
            id='lobby-input'
            type='text'
            className='form-control'
            pattern='[A-Za-z0-9]*'
            title='Lobby Code'
            maxLength='8'
            autoComplete='off'
            value={lobbyID}
            onChange={(e) => setLobbyID(e.target.value.toUpperCase())}
          />
          </div>
        }
        {buttonText === '🏠 Create Lobby' && 
          <div>
          <div className='mb-3'>
            <label htmlFor='playerCount' className='form-label'>
              <i className='fas fa-users' /> Players Count
            </label>
            <input 
              id='playerCount'
              type='number'
              max='10'
              min='5'
              className='form-control'
              value={numPlayers}
              onChange={(e) => setNumPlayers(e.target.value)}
            />
          </div>
          <div className='mb-3'>
          <label htmlFor='wager' className='form-label'>
            <i className='fas fa-briefcase' /> Wager
          </label>
          <input 
            id='wager'
            type='number'
            max='10'
            min='1'
            className='form-control'
            value={wager}
            onChange={(e) => setWager(e.target.value)}
          />
          </div>
          <div className='mb-3'>
          <label htmlFor='rounds' className='form-label'>
            <i className='fas fa-retweet' /> Rounds
          </label>
          <input 
            id='rounds'
            type='number'
            max='5'
            min='1'
            className='form-control'
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
          </div>
          </div>
        }
        <div className='d-grid'>
          <button type=' submit' className='btn btn-primary'>
            {buttonText}
          </button>
        </div>
      </form>
    </Card>
  )
}
