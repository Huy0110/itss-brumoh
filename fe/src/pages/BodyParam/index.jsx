import React from 'react'
import BodyParamsForm from '../../components/BodyParamsForm'
import './style.css'
import Header from '../../components/Header'

export default function BodyParam() {
  return (
    <>
      <Header goBack={true} text={'NHẬP CHỈ SỐ'}/>
      <div className="page-content-container">
        <BodyParamsForm />
      </div>
    </>
  )
}
