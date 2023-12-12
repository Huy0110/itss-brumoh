import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import CalculateIcon from '@mui/icons-material/Calculate'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DiningIcon from '@mui/icons-material/Dining'
import './style.css'
export default function NavBar() {
  const path = window.location.pathname
  const [value, setValue] = useState(path)
  const handleChange = (event, value) => {
    setValue(value)
  }
  return (
    <BottomNavigation className='navbar' value={value} onChange={handleChange}>
      <BottomNavigationAction component={Link} to="/home" value="home" icon={<HomeIcon className='navbar-icon' />} />
      <BottomNavigationAction component={Link} to="/bodyparam" value="bodyparam" icon={<CalculateIcon className='navbar-icon' />} />
      <BottomNavigationAction component={Link} to="/training" value="calendar" icon={<CalendarMonthIcon className='navbar-icon' />} />
      <BottomNavigationAction component={Link} to="/diet" value="diet" icon={<DiningIcon className='navbar-icon' />} />
    </BottomNavigation>
  )
}
