import React from 'react'
import BodyParamsForm from '../../components/BodyParamsForm'
import './style.css'

export default function BodyParam() {
  return (
    <>
      <div className="head-cut"></div>
      <div className="title">
        <h5>NHẬP CHỈ SỐ</h5>
      </div>
      <div className="page-content-container">
        <BodyParamsForm />
      </div>
    </>
  )
}
