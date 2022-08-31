import React from 'react'
import Card from '../components/Card';
import './views.css'

export default function OptIn (props) {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Opting into Game...
                {/* <code style={{display: 'flex',flexDirection: 'column' ,fontSize: '15px'}}>
                  <p>Set Parameters:</p>
                  {'['}
                  <p >player count: {JSON.stringify(props.params.numPlayers)}</p>
                  <p >wager: {JSON.stringify(props.params.amt)}</p>
                  <p >rounds: {JSON.stringify(props.params.rounds)}</p>
                  {']'}
                </code> */}
                <p style={{fontSize: '20px', color: 'blue'}} >please sign your wallet on notification</p>
            </div>
        </div>
    </Card>
  )
}