import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import IconBack from '../../assets/back.png'
export default function GoBackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <IconButton onClick={handleGoBack}>
      <img src={IconBack} alt="back" />
    </IconButton>
  )
}
