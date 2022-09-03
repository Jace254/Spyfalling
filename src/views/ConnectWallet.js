import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function ConnectWallet (props) {
  const [disabled, setDisabled] = useState(false)
  const handleClick = async (e) => {
    if(disabled){
        return;
    }
    setDisabled(true);
    const connection = await props.connect();
    if(connection.result === 'success') {
      props.setWalletMode(true)
      props.setAccount(connection.account);
    } else {
      setDisabled(false);
    }
  }

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Connect Your ALGO Wallet(MyAlgo)
            </div>
            <button onClick={handleClick} className='btn btn-primary'>
                {disabled ? (<>Connecting...</>) : (<>Connect Wallet</>)}
            </button>
        </div>
    </Card>
  )
}
