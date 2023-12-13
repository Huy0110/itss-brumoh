import React from 'react'
import './style.css'
import plan3 from '../../assets/images/plan3.png'
import plan2 from '../../assets/images/plan2.png'
import plan1 from '../../assets/images/plan1.png'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'

export default function PlanTarget() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/training-plan-recommend')
  }
  return (
    <>
      <div className="wrapper">
        <Header goBack={false} text={'Chọn mục tiêu'} />
        <div className="content">
          <text>Tăng cân</text>
          <button>
            <img src={plan1} alt="" />
          </button>
        </div>
        <div className="content">
          <text>Giữ cân</text>
          <button>
            <img src={plan2} alt="" />
          </button>
        </div>
        <div className="content">
          <text>Giảm cân</text>
          <button>
            <img src={plan3} alt="" />
          </button>
        </div>
        <button className="foot" onClick={handleClick}>
          Tiếp theo
        </button>
      </div>
    </>
  )
}
