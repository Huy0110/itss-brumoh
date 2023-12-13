import React from 'react'
import './style.css'
export default function CommonButton({ label, onClick }) {
  return (
    <button className="common-button" onClick={onClick}>
      {label}
    </button>
  )
}
