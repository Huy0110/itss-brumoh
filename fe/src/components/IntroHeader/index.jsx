import React from 'react'
import GoBackButton from '../GoBackButton'
import './style.css'

export default function IntroHeader({ goBack, text }) {
  return (
    <div>
      <div className="head-cut"></div>
      <div className="intro-header">
        <div className="back-icon">{goBack && <GoBackButton />}</div>
        <div className="title">
          <h5>{text}</h5>
        </div>
      </div>
    </div>
  )
}
