import './style.css'
import React from 'react'
import bgImg from '../../assets/bg-img.png'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'

function BodyFat({ page }) {
  let bodyFatIndex = localStorage.getItem('bodyFatIndex')
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/plan-target')
  }
  bodyFatIndex = Math.round(bodyFatIndex * 100) / 100
  return (
    <>
      <Header goBack={true} text={'KẾT QUẢ'} />
      <div className="caculator">
        <div className="bg-img">
          <img src={bgImg} alt="bg" width={440} />
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
                <li>tỉ lệ mỡ lí tưởng cho cơ thể bạn</li>
                <li>khối lượng mỡ cần tăng/ giảm để đạt được trạng thái lí tưởng</li>
              </ul>
            </div>
            <div className="body-fat-variable">
              <ul>
                <li>trung bình</li>
                <li>14%</li>
                <li>14kg</li>
                <li className="last">4kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {page === '002' ? (
        <button className="button-next" onClick={handleClick}>
          TIẾP THEO
        </button>
      ) : (
        <NavBar />
      )}
    </>
  )
}

export default BodyFat
