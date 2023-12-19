import React from 'react'
import './style.css'
import plan3 from '../../assets/images/plan3.png'
import plan2 from '../../assets/images/plan2.png'
import plan1 from '../../assets/images/plan1.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

export default function PlanTarget() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/training-plan-recommend')
  }
  return (
    <>
      <div className="wrapper">
        <Header goBack={true} text={'Chọn mục tiêu'}/>
        <div className="content">
          <button>
            <img src={plan1} alt="" width={380} />
          </button>
        </div>
        <div className="content">
          <button>
            <img src={plan2} alt="" width={380} />
          </button>
        </div>
        <div className="content">
          <button>
            <img src={plan3} alt="" width={380} />
          </button>
        </div>
        <button className="foot" onClick={handleClick}>
          Tiếp theo
        </button>
      </div>
    </>
  )
}
