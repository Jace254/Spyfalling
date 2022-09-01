import React  from 'react'
import Card from '../components/Card';
import './views.css'

export default function SettingParams (props) {

  return (
    <Card className='text-dark bg-light border-primary'>
        <div className='d-grid'>
            <div className='info' >
                Setting Params...
                {props.params}
            </div>
        </div>
    </Card>
  )
}