import React from 'react'

export default function ProgressBar ({ timer, gameDuration }) {
  const progress = (timer / gameDuration) * 100

  return (
    <div className='progress mb-2' style={{ height: '2.5em' }}>
      <div
        className='progress-bar bg-info text-dark'
        role='progressbar'
        style={{ width: timer >= 0 ? `${progress}%` : '100%' }}
        aria-valuenow={Math.round(progress)}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <ProgressBarDisplay timer={timer} />
      </div>
    </div>
  )
}

function ProgressBarDisplay ({ timer }) {
  let minutes = parseInt(timer / 60, 10)
  let seconds = parseInt(timer % 60, 10)
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  if (timer >= 0) {
    return (
      <span>
        <i className='fas fa-stopwatch' /> {minutes}:{seconds}
      </span>
    )
  } else {
    return (
      <span>
        <i className='fas fa-bell' /> Time&apos;s up! Who is the Spy?
      </span>
    )
  }
}
