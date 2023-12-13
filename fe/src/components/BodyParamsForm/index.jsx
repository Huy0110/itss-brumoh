import React, { useState } from 'react'
import GenderToggle from '../GenderToggle'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { Input } from 'antd'
import USER from '../../services/userService'

export default function BodyParamsForm() {
  const [gender, setGender] = useState(true)
  const [age, setAge] = useState(null)
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [waist, setWaist] = useState(null)
  const [neck, setNeck] = useState(null)
  const [hip, setHip] = useState(null)
  const [bust, setBust] = useState(null)
  const [activityIntensity, setActivityIntensity] = useState(null)
  const navigate = useNavigate()
  const handleAge = (value) => {
    setAge(value)
  }
  const handleWeight = (value) => {
    setWeight(value)
  }
  const handleHeight = (value) => {
    setHeight(value)
  }
  const handleNeck = (value) => {
    setNeck(value)
  }
  const handleWaist = (value) => {
    setWaist(value)
  }
  const handleHip = (value) => {
    setHip(value)
  }
  const handleBust = (value) => {
    setBust(value)
  }
  const handleActivityIntensity = (value) => {
    setActivityIntensity(value)
  }
  const handleGender = (value) => {
    setGender(value)
  }
  const validate = (height, weight, neck, bust, waist, hip, activityIntensity, age, gender) => {
    if (height && weight && neck && bust && waist && hip && activityIntensity && age && gender) return 1
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      validate(
        parseInt(height),
        parseInt(weight),
        parseInt(neck),
        parseInt(bust),
        parseInt(waist),
        parseInt(hip),
        parseInt(activityIntensity),
        parseInt(age),
        gender
      )
    )
      try {
        const res = await USER.createOrUpdateBodyMeasurements({
          gender: gender,
          age: parseInt(age),
          height: parseInt(height),
          weight: parseInt(weight),
          neck: parseInt(neck),
          bust: parseInt(bust),
          waist: parseInt(waist),
          hip: parseInt(hip),
          activity_intensity: parseInt(activityIntensity)
        })
        const bodyFatIndex = res?.data?.bodyFatIndex
        const bmr = res?.data?.bmr
        const tdee = res?.data?.tdee

        if (bodyFatIndex) {
          localStorage.setItem('bodyFatIndex', bodyFatIndex)
        }

        if (bmr) {
          localStorage.setItem('bmr', bmr)
        }

        if (tdee) {
          localStorage.setItem('tdee', tdee)
        }

        navigate('/bodyfat')
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
  }
  return (
    <>
      <GenderToggle gender={gender} onChange={handleGender} />
      <form className="body-params-form" onSubmit={(e) => handleSubmit(e)}>
        <Input value={age} placeholder="Tuổi" onChange={(e) => handleAge(e.target.value)} />
        <Input value={weight} placeholder="Cân nặng" addonAfter="Kg" onChange={(e) => handleWeight(e.target.value)} />
        <Input value={height} placeholder="Chiều cao" addonAfter="cm" onChange={(e) => handleHeight(e.target.value)} />
        <Input value={neck} placeholder="Chu vi vòng cổ" addonAfter="cm" onChange={(e) => handleNeck(e.target.value)} />
        <Input
          value={bust}
          placeholder="Chu vi vòng ngực"
          addonAfter="cm"
          onChange={(e) => handleBust(e.target.value)}
        />
        <Input
          value={waist}
          placeholder="Chu vi vòng eo"
          addonAfter="cm"
          onChange={(e) => handleWaist(e.target.value)}
        />
        <Input value={hip} placeholder="Chu vi vòng hông" addonAfter="cm" onChange={(e) => handleHip(e.target.value)} />
        <Input
          value={activityIntensity}
          placeholder="Cường độ vận động"
          addonAfter="Ngày"
          onChange={(e) => handleActivityIntensity(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          TIẾP THEO
        </button>
      </form>
    </>
  )
}
