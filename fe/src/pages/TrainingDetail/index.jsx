import React from 'react'
import Header from '../../components/Header'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { TypeDetails } from '../../utils/constant'

export default function TrainingDetail() {
  const exercises = JSON.parse(localStorage.getItem('exercises'))
  const storedGoal = localStorage.getItem('goal')
  const goal = storedGoal !== null ? JSON.parse(storedGoal) : ""
  const navigate = useNavigate()

  const getType = (types) => {
    let typeString = ''
    types.forEach((type, index) => {
      const typeDetail = TypeDetails.find((detail) => detail.id === type)
      if (typeDetail) {
        typeString += typeDetail.name
        if (index < types.length - 1) {
          typeString += ', '
        }
      }
    })

    return typeString
  }
  const handleClick = (day) => {
    navigate(`/daily-exercise/${day}`)
  }
  return (
    <>
      <Header goBack={true} text={'Lộ trình tập luyện'} />
      <div className="training-container">
        <label>Lộ trình</label>
        <div className="exercise-list">
          {exercises.map((exercise, id) => (
            <button className="exercise-box" onClick={() => handleClick(exercise.day)}>
              <div className="left-box">Ngày {exercise.day}</div>
              <div className="right-box">{getType(exercise.type)}</div>
            </button>
          ))}
        </div>
        <label>Mục tiêu</label>
        <span>{goal.description}</span>
      </div>
    </>
  )
}
