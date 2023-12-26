// import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './style.css'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import USER from '../../services/userService'

export default function DietPlan() {
  // const location = useLocation()
  // const currentPath = location.pathname
  // const id = currentPath.split('/')[2]
  let breakfast = localStorage.getItem('breakfast')
  let lunch = localStorage.getItem('lunch')
  let dinner = localStorage.getItem('dinner')
  let allday = localStorage.getItem('allday')
  const navigate = useNavigate()
  // const [video, setVideo] = useState('')
  // const [description, setDescription] = useState('')
  // const [effect, setEffect] = useState('')
  const handleClick = () => {
    navigate('/meal-guide')
  }
  return (
    <>
      <Header goBack={true} text={'Chế độ ăn'} />
      <div className="diet-plan">
        <label>Tổng lượng Calo cần tiêu thụ trong ngày</label>
        <allday>2000 kcal</allday>
        <label>Đề xuất</label>
        <text>Bữa sáng: 1000 kcal</text>
        <text>Bữa trưa: 600 kcal</text>
        <text>Bữa tối: 400 kcal</text>
      </div>
      <button className="calo-table" onClick={handleClick}>
        Bảng Calo
      </button>
    </>
  )
}
