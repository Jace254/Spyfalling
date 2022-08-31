import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function OptIn () {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Opting into Game...
            </div>
        </div>
    </Card>
  )
}