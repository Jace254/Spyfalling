import React, { useState } from 'react'
import Card from '../components/Card';
import './views.css'

export default function OptIn (props) {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Opting into Game...
                <p>
                  Set Parameters:
                   {props.params}
                </p>
                <p style={{font: '10px', color: 'blue'}} >please sign your wallet on notification</p>
            </div>
        </div>
    </Card>
  )
}