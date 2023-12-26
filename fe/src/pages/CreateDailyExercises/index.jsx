import React from 'react'
import './style.css'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import iconAdd from '../../assets/add-icon.png'

export default function CreateDailyExercises() {
  const handleDone = () => {}
  const handleAddExercises = () => {}
  return (
    <>
      <Header goBack={true} text={'Chọn bài tập cho từng ngày'} />
      <div className="self-create-exercise">
        <button className="exercise">
          <h6>Day 1: yoga, chân</h6>
        </button>
        <button className="no-exercise">
          <h6>Day 1: yoga, chân</h6>
        </button>
        <button className="add-button" onClick={handleAddExercises()}>
          <img src={iconAdd} alt="" width={80} />
        </button>
      </div>
      <button className="create-exercise-done" onClick={handleDone()}>
        Hoàn thành
      </button>
      <NavBar />
    </>
  )
}
