import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../../components/Header'
import USER from '../../services/userService'
import { useNavigate,useLocation } from 'react-router-dom'

export default function SelectExercise() {
  const location = useLocation()
  const currentPath = location.pathname
  const id = currentPath.split('/')[3]
  const [exercisesByType, setExercisesByType] = useState([])
  const [filter, setFilter] = useState()
  const navigation = useNavigate()
  useEffect(() => {
    const fetchExerciseListByType = async () => {
      try {
        const res = await USER.getExerciseByType()
        if (res?.data) {
          setExercisesByType(res?.data)
        }
      } catch (error) {
        console.error(error?.response?.data?.message)
      }
    }
    fetchExerciseListByType()
  }, [])
  const handleChangeFilter = (val) => {
    setFilter(val)
  }
  const handleViewExerciseDetail = (exerciseId) => {
    navigation(`/create-daily-exercises/day/${id}/select-exercise/exercise-detail/${exerciseId}`)
  }
  return (
    <>
      <Header goBack={true} text={'Các bài tập'} />
      <div className="exercise-select">
        {filter
          ? exercisesByType.map((e) => {
              console.log(e.type == filter)
              if (e.type == filter) {
                // Use `return` to ensure the JSX is returned from the map function
                return e.exercises.map((exercise, index) => {
                  return (
                    <div className="exercise-by-id" key={index}>
                      <h6 className="name">{exercise.name}</h6>
                      <button className="detail" onClick={() => handleViewExerciseDetail(exercise._id)}>
                        {exercise.effectiveness}
                      </button>
                    </div>
                  )
                })
              } else {
                return null // Return null if the filter doesn't match
              }
            })
          : exercisesByType.map((e) =>
              e.exercises.map((exercise, index) => (
                <div className="exercise-by-id" key={index}>
                  <h6 className="name">{exercise.name}</h6>
                  <button className="detail" onClick={() => handleViewExerciseDetail(exercise._id)}>
                    {exercise.effectiveness}
                  </button>
                </div>
              ))
            )}
      </div>

      <div className="filter-by-type">
        <input type="radio" id="nguc" name="type" value={1} onChange={(e) => handleChangeFilter(e.target.value)} />
        <label htmlFor="nguc">Ngực</label>
        <br></br>
        <input type="radio" id="vai" name="type" value={2} onChange={(e) => handleChangeFilter(e.target.value)} />
        <label htmlFor="vai">Vai</label>
        <br></br>
        <input type="radio" id="xo" name="type" value={3} onChange={(e) => handleChangeFilter(e.target.value)} />
        <label htmlFor="xo">Xô</label>
        <br></br>
        <input type="radio" id="chan" name="type" value={4} onChange={(e) => handleChangeFilter(e.target.value)} />
        <label htmlFor="chan">Chân</label>
        <br></br>
        <input type="radio" id="tay" name="type" value={5} onChange={(e) => handleChangeFilter(e.target.value)} />
        <label htmlFor="tay">Tay</label>
        <br></br>
      </div>
    </>
  )
}
