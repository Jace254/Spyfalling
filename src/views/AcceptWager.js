import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function AcceptWager (props) {
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
                Do you accept the wager of {props.wager}?
            </div>
            <button onClick={handleClick} className='btn btn-primary'>
                {disabled ? (<>Joining Contract...</>) : (<>Accept Wager</>)}
            </button>
        </div>
    </Card>
  )
}