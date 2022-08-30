import React, { useRef } from 'react'

export default function NewGameForm ({
  readyCheck,
  setReadyCheck,
  connectionManager
}) {
  const readyRef = useRef()

  const handleStartGame = (event) => {
    event.preventDefault()
    if (readyRef.current.checked) {
      //Todo: Reach submit wager
      connectionManager.send('start-game')
    } else {
      // TODO printError you are not ready
    }
  }

  return (
    <div>
      <p className='card-title'>
        <i className='fas fa-flag-checkered' /> New Game
      </p>
      <form onSubmit={handleStartGame}>
        <div className='form-check form-switch mb-3'>
          <input
            id='ready-check'
            className='form-check-input'
            style={{ cursor: 'pointer' }}
            type='checkbox'
            name='ready-check'
            required
            autoComplete='off'
            checked={readyCheck}
            ref={readyRef}
            onChange={() => {}}
            onClick={(event) => {
              connectionManager?.send('player-ready', {
                ready: event.target.checked
              })
              setReadyCheck(event.target.checked)
            }}
          />
          <label htmlFor='ready-check' className='clickable form-check-label'>
            Ready
          </label>
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            <i className='fas fa-traffic-light' /> Start new round
          </button>
        </div>
      </form>
    </div>
  )
}
