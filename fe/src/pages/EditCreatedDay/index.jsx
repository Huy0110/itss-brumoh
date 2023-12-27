import React, { useState } from 'react'
import './style.css'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import { useLocation, useNavigate } from 'react-router-dom'
import trash from '../../assets/trash.png'
import { useEffect } from 'react'
import USER from '../../services/userService'

export default function EditCreatedDay() {
  const location = useLocation()
  const currentPath = location.pathname
  const id = currentPath.split('/')[3]
  const [exercisesList, setExercisesList] = useState([])
  const [curPlan, setCurPlan] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const createdPlan = JSON.parse(localStorage.getItem('selfPlanCreated')) || []
    setCurPlan(createdPlan)
    createdPlan.forEach((plan) => {
      if (plan.day == id) setExercisesList(plan.listExercises)
    })
  }, [id])

  const handleDeleteExercise = (index) => {
    const newExercisesList = exercisesList.filter((_, i) => i !== index)

    // Use map to create a new array of plans, and update the plan with the matching day
    const newPlan = curPlan.map((plan) => {
      if (plan.day == id) {
        // Use splice to remove the element at the specified index
        plan.listExercises.splice(index, 1)
      }
      return plan
    })

    setExercisesList(newExercisesList)
    localStorage.setItem('selfPlanCreated', JSON.stringify(newPlan))
  }

  const handleAddExercises = () => {
    navigate(`/create-daily-exercises/day/${id}/select-exercise`)
  }

  const handleDone = () => {
    const createdPlan = JSON.parse(localStorage.getItem('selfPlanCreated')) || []
    const sendMessage = {}
    createdPlan.map((plan, index) => {
      sendMessage[index] = []
      plan.listExercises.map((exercise) => {
        sendMessage[index].push(exercise._id)
      })
    })
    try {
      const res = USER.saveTrainingPlan({ sendMessage })
      console.log(res)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
    localStorage.setItem('selfPlanCreated', [])
    navigate('/training-plan')
  }

  return (
    <>
      <Header goBack={true} text={`Day ${id}`} />
      <div className="edit-created-day-content">
        <h6>Bài tập của bạn</h6>
        {exercisesList.map((exercise, index) => (
          <div key={index}>
            <div className="created-exercise">
              <button className="exercise">
                <div className="cover-img"></div>
                <h6>
                  Bài tập {index + 1}: {exercise.name}
                </h6>
              </button>
              <button className="button-delete" onClick={() => handleDeleteExercise(index)}>
                <img src={trash} alt="" />
              </button>
            </div>
          </div>
        ))}
        <button className="add-button" onClick={() => handleAddExercises()}>
          <h2>+</h2>
        </button>
      </div>
      <button className="create-exercise-done" onClick={() => handleDone()}>
        Hoàn thành
      </button>
      <NavBar />
    </>
  )
}
