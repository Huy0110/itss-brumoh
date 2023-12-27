import React from 'react'
import './style.css'
import trash from '../../assets/trash.png'

export default function ButtonDelete() {
  return (
    <>
      <button className='button-delete'>
        <img src={trash} alt="" />
      </button>
    </>
  )
}
