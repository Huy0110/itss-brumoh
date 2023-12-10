import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css' // Import stylesheet

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="black-background"></div>
      <div className="content-container">
        <Outlet />
      </div>
      <div className="black-background"></div>
    </div>
  )
}

export default MainLayout
