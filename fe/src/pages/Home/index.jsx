import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const is_first_time = localStorage.getItem('is_first_time')
    if (is_first_time && is_first_time === 'true') {
      navigate('/bodyparam')
    }
  }, [navigate])
  const banner = 'https://t4.ftcdn.net/jpg/04/94/01/91/360_F_494019180_77Xoy8lXRBPTLq6If4tzWekry11oKhp3.jpg'
  const channels = [
    {
      img: 'https://yt3.googleusercontent.com/RKvfb4kad_kVvzNBsLDw7TCxqIw1-3yHUG0c9WRqyYcde1ccRnDZ31GPQSnu4YxcMGGQkecJpZQ=s176-c-k-c0x00ffffff-no-rj',
      name: 'Gym Body Motivation'
    },
    {
      img: 'https://yt3.googleusercontent.com/ucg3ljr_QBaA_rJqo7tewkcGFoFSsMUlKsc7wwuRzt-xvyU-j0_tRPgwAMjDMKABQQHxNFCn=s176-c-k-c0x00ffffff-no-rj',
      name: 'Fitness in gym'
    },
    {
      img: 'https://yt3.googleusercontent.com/ytc/AIf8zZQJZ7qqoRUj8eSzHzW673u7lxDkZicjaeQg7fEd6A=s176-c-k-c0x00ffffff-no-rj',
      name: 'The Rock'
    },
    {
      img: 'https://yt3.googleusercontent.com/AZAXgQ_UdBzwneHvCQxpicVvDxE8Zsdd_T8U5pUmAZITtQ6u0dkkJeTaMVcA674c66zLGbBU=s176-c-k-c0x00ffffff-no-rj',
      name: 'JustMerk'
    }
  ]
  return (
    <>
      <div className="home-container">
        <img src={banner} alt="" style={{ borderRadius: '10px' }} />
        <span className="title">Recommend Channel</span>
        <div className="channel-container">
          {channels.map((channel) => (
            <div className="channel">
              <img className="channel-img" src={channel.img} alt="" />
              <span className="channel-name">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>
      <NavBar />
    </>
  )
}
export default Home
