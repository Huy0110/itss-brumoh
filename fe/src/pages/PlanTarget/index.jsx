import React, { useState } from 'react'
import './style.css'
import plan3 from '../../assets/images/plan3.png'
import plan2 from '../../assets/images/plan2.png'
import plan1 from '../../assets/images/plan1.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function PlanTarget() {
  const navigate = useNavigate()
  let [goal, setGoal] = useState('')
  const handleClick = () => {
    localStorage.setItem('change_plan', false)
    navigate('/training-plan-recommend')
  }
  const handleChosenPlan1 = () => {
    setGoal('Tăng Cân')
  }
  const handleChosenPlan2 = () => {
    setGoal('Giữ Cân')
  }
  const handleChosenPlan3 = () => {
    setGoal('Giảm Cân')
  }
  localStorage.setItem('trainingGoal', goal)

  return (
    <>
      <div className="wrapper">
        <Header goBack={true} text={'Chọn mục tiêu'} />
        <div className={goal === 'Tăng Cân' ? 'content' : 'contentSelected'}>
          <button onClick={handleChosenPlan1}>
            <img src={plan1} alt="" width={380} />
          </button>
        </div>
        <div className={goal === 'Giữ Cân' ? 'content' : 'contentSelected'}>
          <button onClick={handleChosenPlan2}>
            <img src={plan2} alt="" width={380} />
          </button>
        </div>
        <div className={goal === 'Giảm Cân' ? 'content' : 'contentSelected'}>
          <button onClick={handleChosenPlan3}>
            <img src={plan3} alt="" width={380} />
          </button>
        </div>
        <button className="foot" onClick={handleClick}>
          Tiếp theo
        </button>
      </div>
    </>
  )
}
