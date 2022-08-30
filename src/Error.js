import React from 'react'

function Error ({ error }) {
  if (error) {
    return <div className='alert alert-danger mb-3'>{error}</div>
  } else {
    return null
  }
}

export default Error
