import React from 'react'
import './style.css'

export default function Exercise({title}) {
  return (
    <div>
      <p className='exercise-title'>bài tập {title}</p>
      <button className="exercise-detail"></button>
    </div>
  )
}
