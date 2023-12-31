import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import LoginPage from './pages/LoginPage'
import Auth from './hooks/auth'
import BodyFat from './pages/BodyFat'
import Home from './pages/Home'
import BodyParam from './pages/BodyParam'
import TrainingPage from './pages/TrainingPage'
import TrainingPlanRec from './pages/TrainingPlanRec'
import PlanTarget from './pages/PlanTarget'
import TrainingDetail from './pages/TrainingDetail'
import ExerciseDetail from './pages/ExerciseDetail'
import PlanCreate from './pages/PlanCreate'
import DailyExercise from './pages/DailyExercise'
import CreateDailyExercises from './pages/CreateDailyExercises'
import EditCreatedDay from './pages/EditCreatedDay'
import SelectExercise from './pages/SelectExercise'
import ExercisePreview from './pages/ExercisePreview'
import DietPlan from './pages/DietPlan'
import MealGuide from './pages/MealGuide'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Auth path={'login'}>{<BodyParam />}</Auth>} path="/bodyparam" />
          <Route element={<Auth path={'login'}>{<TrainingPage />}</Auth>} path="/training-plan" />
          <Route element={<LoginPage />} path="/login" />
          <Route
            element={
              <Auth path={'login'}>
                <BodyFat page={'002'} />
              </Auth>
            }
            path="/bodyfat"
          />
          <Route
            element={
              <Auth path={'login'}>
                <BodyFat page={'016'} />
              </Auth>
            }
            path="/bodyfatv2"
          />
          <Route
            element={
              <Auth path={'login'}>
                <TrainingDetail />
              </Auth>
            }
            path="/training-detail"
          />
          <Route
            element={
              <Auth path={'login'}>
                <ExerciseDetail />
              </Auth>
            }
            path="/exercise-detail/:id"
          />
          <Route
            element={
              <Auth path={'login'}>
                <TrainingPlanRec />
              </Auth>
            }
            path="/training-plan-recommend"
          />
          <Route
            element={
              <Auth path={'login'}>
                <PlanTarget />
              </Auth>
            }
            path="/plan-target"
          />
          <Route
            element={
              <Auth path={'login'}>
                <PlanCreate />
              </Auth>
            }
            path="/plan-create"
          />
          <Route
            element={
              <Auth path={'login'}>
                <DailyExercise />
              </Auth>
            }
            path="/daily-exercise/:id"
          />
          <Route
            element={
              <Auth path={'login'}>
                <CreateDailyExercises />
              </Auth>
            }
            path="/create-daily-exercises"
          />
          <Route
            element={
              <Auth path={'login'}>
                <EditCreatedDay />
              </Auth>
            }
            path="/create-daily-exercises/day/:id"
          />
          <Route
            element={
              <Auth path={'login'}>
                <SelectExercise />
              </Auth>
            }
            path="/create-daily-exercises/day/:id/select-exercise"
          />
          <Route
            element={
              <Auth path={'login'}>
                <ExercisePreview />
              </Auth>
            }
            path="/create-daily-exercises/day/:id/select-exercise/exercise-detail/:exerciseId"
          />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="home" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="/" />
          <Route
            element={
              <Auth path={'login'}>
                <DietPlan />
              </Auth>
            }
            path="/diet"
          />
          <Route
            element={
              <Auth path={'login'}>
                <MealGuide />
              </Auth>
            }
            path="/meal-guide"
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
