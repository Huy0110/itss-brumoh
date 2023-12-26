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
import PlanCreate from './pages/PlanCreate'
import DailyExercise from './pages/DailyExercise'
import CreateDailyExercises from './pages/CreateDailyExercises'
<<<<<<< HEAD
import EditCreatedDay from './pages/EditCreatedDay'
import SelectExercise from './pages/SelectExercise'
import ExercisePreview from './pages/ExercisePreview'
=======
import DietPlan from './pages/DietPlan'
import MealGuide from './pages/MealGuide'
>>>>>>> origin

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
          <Route element={<PlanCreate />} path="/plan-create" />
          <Route element={<DailyExercise />} path="/daily-exercise/:id" />
          <Route element={<CreateDailyExercises />} path="/create-daily-exercises" />
          <Route element={<EditCreatedDay />} path="/create-daily-exercises/day/:id" />
          <Route element={<SelectExercise />} path="/create-daily-exercises/day/:id/select-exercise" />
          <Route element={<ExercisePreview />} path="/create-daily-exercises/day/:id/select-exercise/exercise-detail/:exerciseId" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="home" />
          <Route element={<Auth path={'login'}>{<Home />}</Auth>} path="/" />
          <Route element={<DietPlan />} path="/diet" />
          <Route element={<MealGuide />} path="/meal-guide" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
