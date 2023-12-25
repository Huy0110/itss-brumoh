import './style.css'
import React from 'react'
import bgImg from '../../assets/bg-img.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'

function BodyFat() {
  let bodyFatIndex = localStorage.getItem('bodyFatIndex')
  const is_first_time = localStorage.getItem('is_first_time')
  const change_plan = localStorage.getItem('change_plan')
  let weight = localStorage.getItem('weight')
  let bodyFatWeight = (bodyFatIndex / 100) * weight
  let bodyFatType = ''
  let needToDo = bodyFatWeight - (14 / 100) * weight
  let advise = ''
  if (needToDo >= 0) advise = 'Khối lượng mỡ cần giảm để đạt được trạng thái lí tưởng'
  if (needToDo < 0) advise = 'Khối lượng mỡ cần tăng để đạt được trạng thái lí tưởng'

  if (bodyFatIndex < 10) bodyFatIndex = 'Gầy'
  if (bodyFatIndex >= 10 && bodyFatIndex < 15) bodyFatType = 'Trung bình'
  if (bodyFatIndex >= 15 && bodyFatIndex < 20) bodyFatType = 'Ngọt nước'
  if (bodyFatIndex >= 20) bodyFatType = 'Múp'

  bodyFatIndex = Math.round(bodyFatIndex * 100) / 100
  bodyFatWeight = Math.round(bodyFatWeight * 100) / 100
  let displayNeedToDo = Math.abs(Math.round(needToDo * 100) / 100)
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.setItem('is_first_time', false)
    navigate('/plan-target')
  }
  return (
    <>
      <div className="container">
        <Header goBack={true} text={'KẾT QUẢ'} />
        <div className="caculator">
          <div className="bg-img">
            <img src={bgImg} alt="bg" width={420} />
          </div>
          <div className="bg"></div>
          <div className="caculate">
            <div className="body-fat">
              <text className="title">BODY FAT</text>
              <text className="fat-variable">{bodyFatIndex}%</text>
            </div>
            <div className="body-info">
              <div className="body-fat-title">
                <ul>
                  <li>Loại mỡ cơ thể</li>
                  <li>Khối lượng mỡ cơ thể</li>
                  <li>Tỉ lệ mỡ lí tưởng cho cơ thể bạn</li>
                  <li>{advise}</li>
                </ul>
              </div>
              <div className="body-fat-variable">
                <ul>
                  <li>{bodyFatType}</li>
                  <li>{bodyFatWeight}kg</li>
                  <li>14%</li>
                  <li className="last">{displayNeedToDo}kg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {(change_plan && change_plan === 'true') || is_first_time === 'true' ? (
          <div className="button-next">
            <button onClick={handleClick}>
              <text>TIẾP THEO</text>
            </button>
          </div>
        ) : (
          <NavBar />
        )}
      </div>
    </>
  )
}

export default BodyFat
