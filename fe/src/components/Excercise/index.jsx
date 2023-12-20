import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export default function Exercise({ title, description, id }) {
  const navigate = useNavigate()
  const handleExerciseClick = (id) => {
    navigate(`/exercise-detail/${id}`)
  }
  return (
    <div>
      <p className="exercise-title">Bài Tập {title}</p>
      <button className="exercise-detail" onClick={() => handleExerciseClick(id)}>
        {description}
      </button>
    </div>
  )
}
