import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import AppLayout from './components/layout/AppLayout'
import LoginPage from './pages/LoginPage'
import Auth from './hooks/auth'
import BodyFat from './pages/BodyFat'
import { Home } from './pages/Home'
import BodyParam from './pages/BodyParam'

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<AppLayout />}>
          <Route index element={<LoginPage />} path="/login" />
        </Route> */}
        <Route element={<MainLayout />}>
          <Route element={<BodyParam />} path="/bodyparam" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<BodyFat />} path="/bodyfat" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="home" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
