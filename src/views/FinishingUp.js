import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function FinishingUp () {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Finishing up...
            </div>
        </div>
    </Card>
  )
}