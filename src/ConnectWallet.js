import React, { useState } from 'react'
import Card from './Card';

export default function ConnectWallet (props) {
  const [disabled, setDisabled] = useState(false)
  const handleClick = async (e) => {
    if(disabled){
        return;
    }
    setDisabled(true);
    const connection = await props.connect();
    console.log(connection.result);
    console.log(connection.account);
    props.setWalletMode(true)
    props.setAccount(connection.account);

  }

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div textalign='center' >
                Connect Your ALGO Wallet(MyAlgo)
            </div>
            <button onClick={handleClick} className='btn btn-primary'>
                {disabled ? (<>Connecting...</>) : (<>Connect Wallet</>)}
            </button>
        </div>
    </Card>
  )
}