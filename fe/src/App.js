import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import LoginPage from './pages/LoginPage'
import Auth from './hooks/auth'
import BodyFat from './pages/BodyFat'
import { Home } from './pages/Home'
import BodyParam from './pages/BodyParam'
import TrainingPage from './pages/TrainingPage'
import TrainingPlanRec from './pages/TrainingPlanRec'
import PlanTarget from './pages/PlanTarget'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Auth path={'login'}>{<BodyParam />}</Auth>} path="/bodyparam" />
          <Route element={<Auth path={'login'}>{<TrainingPage />}</Auth>} path="/training" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<BodyFat />} path="/bodyfat" />
          <Route element={<TrainingPlanRec />} path="/training-plan-recommend" />
          <Route element={<PlanTarget />} path="/plan-target" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="home" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
