import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function AcceptWager ({wager, DisconnectButton,disconnectCallback}) {
  const [disabled, setDisabled] = useState(false)
  const handleClick = async (e) => {
    if(disabled){
        return;
    }
    setDisabled(true);
    //button logic
  }


  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Do you accept the wager of {wager}?
            </div>
            <button onClick={handleClick} className='btn btn-primary'>
                {disabled ? (<>Joining Game...</>) : (<>Accept Wager</>)}
            </button>
            <hr />
            <DisconnectButton disconnectCallback={disconnectCallback}/>
        </div>
    </Card>
  )
}