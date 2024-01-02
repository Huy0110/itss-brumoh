import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import USER from '../../services/userService'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      localStorage.clear()
      const res = await USER.login({
        email: email,
        password: password
      })

      console.log('res: ', res)
      const token = res?.data?.accessToken
      const id = res?.data?.id
      const is_first_time = res?.data?.is_first_time
      if (token) {
        localStorage.setItem('token', token)
      }

      if (id) {
        localStorage.setItem('id', id)
      }

      localStorage.setItem('is_first_time', is_first_time)

      console.log('Login success')
      navigate('/home') // Sử dụng hook navigate để chuyển hướng đến '/home'
    } catch (error) {
      console.error(error?.response?.data?.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginPage
