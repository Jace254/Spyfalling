import React, { useState } from 'react'
import Card from './Card'

export default function Locations ({ locations, connectionManager, isSpy, gameStarted}) {
  const [vote, setVote] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    connectionManager.send('vote-event', {
      spy: isSpy,
      vote: vote,
    })
  }
  if (locations && locations.length > 0) {
    return (
      <Card header='📍 Locations' hasBody={false}>
        <ul className='list-group list-group-flush'>
          {locations.map((loc, i) => {
            return (
              <li
                key={i}
                className='list-group-item list-group-item-action text-dark py-1'
                onClick={(e) => {
                  e.target.classList.contains('strike')
                    ? e.target.classList.remove('strike')
                    : e.target.classList.add('strike')
                }}
              >
                {loc}
              </li>
            )
          })}
        </ul>
        {isSpy && gameStarted
        ? (
        <>
        <form onSubmit={handleSubmit}>
            <select 
              className='mb-3 form-control'
              value={vote} 
              name="choice"
              onChange={(e) => setVote(e.target.value)}
            >
              {locations.map((loc, i) => {
                return (
                  <option value={i} key={loc}>{loc}</option>
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
      </Card>
    )
  } else {
    return null
  }
}
