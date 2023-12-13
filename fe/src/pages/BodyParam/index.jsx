import React from 'react'
import BodyParamsForm from '../../components/BodyParamsForm'
import Header from '../../components/Header'
import './style.css'

export default function BodyParam() {
  return (
    <>
      <Header text={'NHẬP CHỈ SỐ'} />
      <div className="page-content-container">
        <BodyParamsForm />
      </div>
    </>
  )
}
