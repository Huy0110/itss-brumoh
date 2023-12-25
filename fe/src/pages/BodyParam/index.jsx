import React, { useEffect, useState } from 'react'
import BodyParamsForm from '../../components/BodyParamsForm'
import './style.css'
import Header from '../../components/Header'
import USER from '../../services/userService'

export default function BodyParam() {
  const is_first_time = localStorage.getItem('is_first_time')
  let goBack = true
  if (is_first_time === 'true') {
    goBack = false
  }
  const [initBody, setInitBody] = useState()
  useEffect(() => {
    const getBody = async () => {
      const res = await USER.getBody()
      if (res?.data?.bodyMeasurements) setInitBody(res?.data?.bodyMeasurements)
      if (res?.data?.is_first_time) localStorage.setItem('is_first_time', res?.data?.is_first_time)
    }
    getBody()
  }, [])
  return (
    <>
      <Header goBack={goBack} text={'NHẬP CHỈ SỐ'} />
      <div className="page-content-container">
        <BodyParamsForm initBody={initBody} />
      </div>
    </>
  )
}
