import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import USER from '../../services/userService'

export default function ExercisePreview() {
  const location = useLocation()
  const currentPath = location.pathname
  const id = currentPath.split('/')[6]
  const day = currentPath.split('/')[3]
  const [exercise, setExercise] = useState('')
  const createdPlan = JSON.parse(localStorage.getItem('selfPlanCreated')) || []

  const navigate = useNavigate()

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await USER.getExercise({ id })
        if (res?.data) {
          setExercise(res?.data)
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
    }

    fetchExercise()
    // Update newPlan inside the useEffect block
  }, [id])

  const newPlan = createdPlan.map((plan) =>
    plan.day == day ? { ...plan, listExercises: [...plan.listExercises, exercise] } : plan
  )
  console.log(newPlan);
  const handleConfirmExercise = () => {
    localStorage.setItem('selfPlanCreated', JSON.stringify(newPlan))
    navigate('/create-daily-exercises')
  }

  return (
    <>
      <Header goBack={true} text={'Chi tiết bài tập'} />
      <div className="exercise-container">
        <label>Video</label>
        <video className="video-container" controls>
          <source src={exercise.video} type="video/mp4" />
        </video>
        <label>Cách thực hiện</label>
        <span>{exercise.description}</span>
        <label>Hiệu quả mang lại</label>
        <span>{exercise.effectiveness}</span>
      </div>
      <button className="confirm-exercise" onClick={() => handleConfirmExercise()}>
        Xác Nhận
      </button>
    </>
  )
}
