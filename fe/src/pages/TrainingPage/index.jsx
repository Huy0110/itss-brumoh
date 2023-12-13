import React from 'react'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import TrainingChart from '../../components/TrainingChart'
import { useNavigate } from 'react-router-dom'
import './style.css'
import CommonButton from '../../components/CommonButton'
export default function TrainingPage() {
  const navigate = useNavigate()
  const onClickDetail = () => {
    navigate('/training-detail')
  }
  const onClickChange = () => {
    navigate('/training-change')
  }
  return (
    <>
      <Header goBack={true} text={'Lịch trình luyện tập'} />
      <TrainingChart />
      <button className="detail-button" onClick={onClickDetail}>
        <h4>Lộ trình tập luyện</h4>
        <span>Bấm để xem chi tiết</span>
      </button>
      <CommonButton label={'Thay đổi'} onClick={onClickChange} />
      <NavBar />
    </>
  )
}
