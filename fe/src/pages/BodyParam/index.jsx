import React from 'react'
import BodyParamsForm from '../../components/BodyParamsForm'
import './style.css'
import Header from '../../components/Header'

export default function BodyParam() {
  const is_first_time = localStorage.getItem('is_first_time')
  let goBack = true
  if (is_first_time === 'true') {
    goBack = false
  }
  return (
    <>
      <Header goBack={goBack} text={'NHẬP CHỈ SỐ'} />
      <div className="page-content-container">
        <BodyParamsForm />
      </div>
    </>
  )
}
