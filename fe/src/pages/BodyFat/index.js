import './style.css'
import React from 'react'
import bgImg from '../../assets/bg-img.png'
import IBack from '../../assets/back.png'

function App() {
  var bodyFatIndex = localStorage.getItem('bodyFatIndex');
  bodyFatIndex = Math.round(bodyFatIndex * 100)/100;
  return (
    <div className="App">
      <div className="container">
        <div className="head-cut"></div>
        <div className="header">
          <div className="back-icon">
            <img src={IBack} alt="" />
          </div>
          <div className="title">
            <h3>KẾT QUẢ</h3>
          </div>
        </div>
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
        <div className="button-next">
          <button>
            <text>TIẾP THEO</text>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
