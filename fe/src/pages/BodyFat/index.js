import './style.css'
import React from 'react'
import bgImg from '../../assets/bg-img.png'
import IBack from '../../assets/back.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="head-cut"></div>
        <div className="header">
          <div className="back-icon">
            <img src={IBack} alt="" />
          </div>
          <div className="title">
            <h3>KET QUA</h3>
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
              <text className="fat-variable">23.0%</text>
            </div>
            <div className="body-info">
              <div className="body-fat-title">
                <ul>
                  <li>loai mo co the</li>
                  <li>khoi luong mo co the</li>
                  <li>ti le mo li tuong cho co the cua ban</li>
                  <li>khoi luong mo co the can tang/giam de dat duoc trang thai ly tuong</li>
                </ul>
              </div>
              <div className="body-fat-variable">
                <ul>
                  <li>trung binh</li>
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
            <text>TIEP THEO</text>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
