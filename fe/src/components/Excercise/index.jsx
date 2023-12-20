import React from 'react'
import './style.css'

export default function Exercise({title, description}) {
  return (
    <div>
      <p className='exercise-title'>Bài Tập {title}</p>
      <button className="exercise-detail">{description}</button>
    </div>
  )
}
