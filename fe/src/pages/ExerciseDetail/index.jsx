import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './style.css'
import { useLocation } from 'react-router-dom'
import USER from '../../services/userService'

export default function ExerciseDetail() {
  const location = useLocation()
  const currentPath = location.pathname
  const id = currentPath.split('/')[2]
  const [video, setVideo] = useState('')
  const [description, setDescription] = useState('')
  const [effect, setEffect] = useState('')
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await USER.getExercise({ id })
        if (res?.data?.video) {
          setVideo(res?.data?.video)
        }

        if (res?.data?.description) {
          setDescription(res?.data?.description)
        }

        if (res?.data?.effectiveness) {
          setEffect(res?.data?.effectiveness)
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
    }
    fetchExercise()
  }, [id])
  return (
    <>
      <Header goBack={true} text={'Chi tiết bài tập'} />
      <div className="exercise-container">
        <label>Video</label>
        <video className="video-container" controls>
          <source src={video} type="video/mp4" />
        </video>
        <label>Cách thực hiện</label>
        <span>{description}</span>
        <label>Hiệu quả mang lại</label>
        <span>{effect}</span>
      </div>
    </>
  )
}
