import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import './style.css'

export default function PlanCreate() {
  return (
    <>
      <Header goBack={true} text={'Tạo lịch trình cho riêng bạn'} />
      <div className="plan-create-content">
        <button className="plan-create-item">
            <h5>APP ĐỀ XUẤT</h5>
        </button>
        <button className="plan-create-item">
            <h5>TỰ TẠO</h5>
        </button>
      </div>
      <NavBar />
    </>
  )
}
