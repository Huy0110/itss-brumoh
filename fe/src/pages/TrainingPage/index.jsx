import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import TrainingChart from '../../components/TrainingChart'
import { useNavigate } from 'react-router-dom'
import USER from '../../services/userService'
import './style.css'
import CommonButton from '../../components/CommonButton'
export default function TrainingPage() {
  const [exercises, setExercises] = useState()
  const [goal, setGoal] = useState()
  const navigate = useNavigate()
  const onClickDetail = () => {
    localStorage.setItem('exercises', JSON.stringify(exercises))
    localStorage.setItem('goal', JSON.stringify(goal))
    navigate('/training-detail')
  }
  const onClickChange = () => {
    navigate('/plan-create')
  }

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
  return (
    <>
      <Header goBack={true} text={'Lịch trình luyện tập'} />
      <TrainingChart exercises={exercises} />
      <button className="detail-button" onClick={onClickDetail}>
        <h4>Lộ trình tập luyện</h4>
        <span>Bấm để xem chi tiết</span>
      </button>
      <CommonButton label={'Thay đổi'} onClick={onClickChange} />
      <NavBar />
    </>
  )
}
