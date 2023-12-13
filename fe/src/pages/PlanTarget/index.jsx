import React from 'react'
import './style.css'
import bgImg from '../../assets/images/bg1.png'
import plan3 from '../../assets/images/plan3.png'
import plan2 from '../../assets/images/plan2.png'
import plan1 from '../../assets/images/plan1.png'

export default function PlanTarget() {
  return (
    <div className="container">
    <img className="bgImg" src={bgImg} alt="" />
      <div className="wrapper">
        <div className="head">Chọn mục tiêu</div>
        <div className="content">
          <text>Tăng cân</text>
          <button><img src={plan1} alt="" /></button>
        </div>
        <div className="content">
          <text>Giữ cân</text>
          <button><img src={plan2} alt="" /></button>
        </div>
        <div className="content">
          <text>Giảm cân</text>
          <button><img src={plan3} alt="" /></button>
        </div>
        <div className="foot"><button>Tiếp theo</button></div>
      </div>
    </div>
  )
}
