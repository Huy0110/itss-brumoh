import React from 'react'
import './style.css'
const GenderToggle = ({ gender, onChange }) => {
  return (
    <div className="btn-group-gender">
      <button className={`${gender ? 'btn-active' : 'btn-default'}`} onClick={() => onChange(true)}>
        NAM
      </button>
      <button className={`${gender ? 'btn-default' : 'btn-active'}`} onClick={() => onChange(false)}>
        NỮ
      </button>
    </div>
  )
}

export default GenderToggle
