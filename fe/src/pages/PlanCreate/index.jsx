import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import './style.css'
import Header from '../../components/Header'

export default function PlanCreate() {
  const navigate = useNavigate()
  const handleAppRec = () => {
    localStorage.setItem('change_plan', true)
    navigate('/bodyparam')
  }
  const handleCreatePlan = () => {
    navigate('/create-daily-exercises')
  }
  return (
    <>
      <Header goBack={true} text={'Lịch trình luyện tập'} />
      <div className="plan-create-content">
        <button className="plan-create-item" onClick={() => handleAppRec()}>
          <h5>APP ĐỀ XUẤT</h5>
        </button>
        <button className="plan-create-item" onClick={() => handleCreatePlan()}>
          <h5>TỰ TẠO</h5>
        </button>
      </div>
      <NavBar />
    </>
  )
}
