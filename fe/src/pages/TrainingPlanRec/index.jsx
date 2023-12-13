import React from 'react'
import './style.css'
import bgImg from '../../assets/images/Rectangle_16.png'

export default function TrainingPlanRec() {
  return (
    <div>
      <div className="header">
        <text>Chúng tôi đề xuất Lịch tập</text>
      </div>
      <div className="body">
        <img src={bgImg} alt="" />
      </div>
      <div className="footer">
        <button className="agree">cho tôi xem</button>
        <button className="cancel">không cần</button>
      </div>
    </div>
  )
}
