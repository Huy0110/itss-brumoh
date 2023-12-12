import React from 'react'
import './style.css'
import GoBackButton from '../GoBackButton'
export default function Header({ goBack, text }) {
  return (
    <div className="header-container">
      <div className="header-small-box">{goBack && <GoBackButton />}</div>
      <div className="header-large-box">
        <span className="header-text">{text}</span>
      </div>
      <div className="header-small-box"></div>
    </div>
  )
}
