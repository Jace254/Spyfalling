import React from 'react'
import Card from './Card'

export default function Locations ({ locations }) {
  if (locations && locations.length > 0) {
    return (
      <Card header='📍 Locations' hasBody={false}>
        <ul className='list-group list-group-flush'>
          {locations.map((loc, i) => {
            return (
              <li
                key={i}
                className='list-group-item list-group-item-action text-dark py-1'
                onClick={(e) => {
                  e.target.classList.contains('strike')
                    ? e.target.classList.remove('strike')
                    : e.target.classList.add('strike')
                }}
              >
                {loc}
              </li>
            )
          })}
        </ul>
      </Card>
    )
  } else {
    return null
  }
}
