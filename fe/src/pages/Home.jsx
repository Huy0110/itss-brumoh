import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const is_first_time = localStorage.getItem('is_first_time')
    if (is_first_time && is_first_time === 'true') {
      navigate('/bodyparam')
    }
  })
  return (
    <>
      Home
      <NavBar />
    </>
  )
}
