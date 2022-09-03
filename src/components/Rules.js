import React, { useState } from 'react'
import Card from './Card'

export default function Rules () {
  const [showRules, setShowRules] = useState(false)

  return (
    <Card header='<i class="fas fa-book"></i> Rules'>
      <div className='d-grid'>
        <button
          className='btn btn-outline-primary'
          onClick={() => setShowRules(!showRules)}
        >
          <i className='fas fa-eye' /> Show/Hide
        </button>
        <RulesDetails showRules={showRules} />
      </div>
    </Card>
  )
}

function RulesDetails (props) {
  if (props.showRules) {
    return (
      <div>
        <ul className='mt-3'>
          <li>
            <i className='fas fa-users' /> 5-10 Players
          </li>
          <li>
            <i className='fas fa-stopwatch' /> 10 Minutes Rounds
          </li>
          <li>
            <i className='fas fa-mobile-alt' /> 1 Device per player
          </li>
        </ul>
        <hr />
        <ul>
          <li>All players are in the same location</li>
          <li>The spy has to guess the current location</li>
          <li>The other players have to guess who the spy is</li>
          <li>
            The first player picks another person and asks them a question about
            the location (Do people wear a uniform? Is there a specific color in
            this place? ...)
          </li>
          <li>
            The player who just answered the question asks the next question to
            another person
          </li>
        </ul>
        <h6>
          <i className='fas fa-hourglass-end' /> When the timer ends
        </h6>
        <ul>
          <li>
            Players vote to designate the spy
            <ul>
              <li>
                If the players have voted for the spy, the spy has one chance to
                guess the location and win the game
              </li>
              <li>If the players have voted for an innocent, the spy wins</li>
            </ul>
          </li>
        </ul>
        <h6>
          <i className='fas fa-hand-point-right' /> At any time
        </h6>
        <ul>
          <li>A player can vote for a spy,if the player votes correctly they win</li>
          <li>
            The spy can reveal themselves and guess the location. The spy wins the game if he guessed
            correctly, or loses otherwise
          </li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}
