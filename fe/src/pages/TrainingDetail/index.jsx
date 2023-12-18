import React from 'react'
import Header from '../../components/Header'
import './style.css'
export default function TrainingDetail() {
  const exercises = [
    {
      day: 1,
      name: 'Ngực + Vai'
    },
    {
      day: 2,
      name: 'Xô + Tay trước'
    },
    {
      day: 3,
      name: 'Chân + Tay sau'
    },
    {
      day: 4,
      name: 'Toàn thân'
    }
  ]
  return (
    <>
      <Header goBack={true} text={'Lộ trình tập luyện'} />
      <div className="exercise-container">
        <label>Lộ trình</label>
        <div className="exercise-list">
          {exercises.map((exercise, id) => (
            <div className="exercise-box">
              <div className="left-box">Ngày {exercise.day}</div>
              <div className="right-box">{exercise.name}</div>
            </div>
          ))}
        </div>
        <label>Mục tiêu</label>
        <span>Lorem ipsum</span>
      </div>
    </>
  )
}
