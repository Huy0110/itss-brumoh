import React from 'react'
import './style.css'
import bgImg from '../../assets/images/Rectangle_16.png'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import USER from '../../services/userService'

export default function TrainingPlanRec() {
  const navigate = useNavigate()
  const goal = localStorage.getItem('trainingGoal')
  console.log(goal)
  const handleAgree = () => {
    try {
      const res = USER.selectTrainingGoal({ goal })
      console.log(res)
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
    navigate('/training-plan')
  }
  const handleCancel = () => {
    navigate('/')
  }
  return (
    <>
      <Header goBack={true} text={'Đề xuất lịch tập'} />
      <div className="body">
        <img src={bgImg} alt="" />
      </div>
      <div className="footer">
        <button className="agree" onClick={handleAgree}>
          Cho tôi xem
        </button>
        <button className="cancel" onClick={handleCancel}>
          Không cần
        </button>
      </div>
    </>
  )
}
