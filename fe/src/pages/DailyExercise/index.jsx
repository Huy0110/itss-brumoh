import React from 'react'
import './style.css'
import Header from '../../components/Header'

export default function DailyExercise() {
  return (
    <div className='daily-exercise-container'>
      <Header goBack={true} text={'Ngày X'}/>
      <ul className='list-exercise'>
        <p>Danh sách bài tập</p>
        <li>
          <p>bài tập a</p>
          <div className="exercise"></div>
        </li>
        <li>
          <p>bài tập b</p>
          <div className="exercise"></div>
        </li>
        <li>
          <p>bài tập c</p>
          <div className="exercise"></div>
        </li>
        <li>
          <p>bài tập d</p>
          <div className="exercise"></div>
        </li>
      </ul>
    </div>
  )
}
