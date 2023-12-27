import React, { useState, useEffect } from 'react'
import './style.css'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import iconAdd from '../../assets/add-icon.png'
import trash from '../../assets/trash.png'
import { useNavigate } from 'react-router-dom'
import USER from '../../services/userService'

export default function CreateDailyExercises() {
  const navigate = useNavigate()
  const createdPlan = JSON.parse(localStorage.getItem('selfPlanCreated')) || []
  const [plan, setPlan] = useState(createdPlan)
  useEffect(() => {
    localStorage.setItem('selfPlanCreated', JSON.stringify(plan))
  }, [plan])

  const handleDone = () => {
    const createdPlan = JSON.parse(localStorage.getItem('selfPlanCreated')) || []
    const sendMessage = {}
    createdPlan.map((plan,index) => {
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

  const handleAddExercises = () => {
    if (plan.length >= 7) return
    const newPlan = [...plan, { day: plan.length + 1, listExercises: [] }]
    setPlan(newPlan)
  }

  const handleDeleteDay = (index) => {
    const newPlan = plan.filter((_, i) => i !== index)
    setPlan(newPlan)
  }

  const handleEditDay = (index) => {
    navigate(`/create-daily-exercises/day/${index + 1}`)
  }
  console.log(plan)
  return (
    <>
      <Header goBack={true} text={'Chọn bài tập cho từng ngày'} />
      <div className="self-create-exercise">
        {plan.map((day, index) => (
          <div key={index}>
            <div className="created-day">
              {day.listExercises.length > 0 ? (
                <button className="exercise" onClick={() => handleEditDay(index)}>
                  <h6>
                    Day {index + 1}:{' '}
                    {day.listExercises.map((e, index) => {
                      if (index === 0) {
                        return e.name
                      } else {
                        return ', ' + e.name
                      }
                    })}
                  </h6>
                </button>
              ) : (
                <button className="no-exercise" onClick={() => handleEditDay(index)}>
                  <h6>Day {index + 1}: Chưa chọn bài tập</h6>
                </button>
              )}
              <button className="button-delete" onClick={() => handleDeleteDay(index)}>
                <img src={trash} alt="" />
              </button>
            </div>
          </div>
        ))}
        {plan.length !== 7 ? (
          <button className="add-button" onClick={() => handleAddExercises()}>
            <img src={iconAdd} alt="" width={80} />
          </button>
        ) : (
          <></>
        )}
      </div>
      <button className="create-exercise-done" onClick={() => handleDone()}>
        Hoàn thành
      </button>
      <NavBar />
    </>
  )
}
