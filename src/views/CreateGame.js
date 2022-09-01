import React from 'react'
import Card from '../components/Card';
import './views.css'

export default function CreateGame () {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Creating Game...
            </div>
        </div>
    </Card>
  )
}
