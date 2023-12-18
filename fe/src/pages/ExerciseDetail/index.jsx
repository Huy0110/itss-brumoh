import React from 'react'
import Header from '../../components/Header'
import './style.css'
export default function ExerciseDetail() {
  return (
    <>
      <Header goBack={true} text={'Chi tiết bài tập'} />
      <div className="exercise-container">
        <label>Video</label>
        <video className="video-container" controls>
          <source src="" type="video/mp4" />
        </video>
        <label>Cách thực hiện</label>
        <span>Lorem ipsum</span>
        <label>Hiệu quả mang lại</label>
        <span>Lorem ipsum</span>
      </div>
    </>
  )
}
