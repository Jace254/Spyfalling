import React from 'react'

export default function PlayersList ({ lobbyStatus }) {
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
              {client.name} {client.ready ? ' ✅' : ''}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
