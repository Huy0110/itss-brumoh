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
import TrainingDetail from './pages/TrainingDetail'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Auth path={'login'}>{<BodyParam />}</Auth>} path="/bodyparam" />
          <Route element={<Auth path={'login'}>{<TrainingPage />}</Auth>} path="/training-plan" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<BodyFat page={'002'} />} path="/bodyfat" />
          <Route element={<BodyFat page={'016'} />} path="/bodyfatv2" />
          <Route element={<TrainingDetail />} path="/training-detail" />
          <Route element={<ExerciseDetail />} path="/exercise-detail/:id" />
          <Route element={<TrainingPlanRec />} path="/training-plan-recommend" />
          <Route element={<PlanTarget />} path="/plan-target" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="home" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="/" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
