import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './style.css'
import USER from '../../services/userService'
import { useNavigate } from 'react-router-dom'
import TypeDetails from '../../utils/constant'
export default function TrainingDetail() {
  const [exercises, setExercises] = useState([])
  const [goal, setGoal] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchTrainingPlan = async () => {
      try {
        const res = await USER.getTrainingPlan()
        if (res?.data?.goalDetails) {
          setGoal(res?.data?.goalDetails)
        }
        if (res?.data?.exerciseOverall) {
          setExercises(res?.data?.exerciseOverall)
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
    }
    fetchTrainingPlan()
  }, [])

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
            <button className="exercise-box" onClick={handleClick(exercise.day)}>
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
