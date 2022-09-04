import React, { useState } from 'react'

export default function PlayersList ({ lobbyStatus, isSpy, connectionManager,gameStarted }) {
  const [vote, setVote] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    connectionManager.send('vote-event', {
      spy: isSpy,
      vote: vote,
    })
  }
  return (
    <div>
      <h6 className='card-title'>
        <i className='fas fa-users' /> Players
      </h6>
      <ul className='list-group list-group-flush'>
        {lobbyStatus?.peers.clients.map((client) => {
          return (
            <li
              className='list-group-item clickable'
              key={client.name}
              onClick={(e) => {
                e.target.classList.contains('strike')
                  ? e.target.classList.remove('strike')
                  : e.target.classList.add('strike')
              }}
            >
              {client.id} {client.name} {client.ready ? ' ✅' : ''}
            </li>
          )
        })}
      </ul>
      {/**if player is not spy, they can see this view and choose who the spy is */}
      {!isSpy && gameStarted
      ? (
      <>
      <form onSubmit={handleSubmit}>
          <select 
            className='mb-3 form-control'
            value={vote} 
            name="choice"
            onChange={(e) => setVote(e.target.value)}
          >
            {lobbyStatus?.peers.clients.map((client, i) => {
              return (
                <option value={i} key={client.name}>{client.name}</option>
              )
            })}
          </select>
          <div className='d-grid'>
            <button type=' submit' className='btn btn-primary'>
              Submit Vote
            </button>
          </div>
        </form>
        </>) : (null)}
    </div>
  )
}
