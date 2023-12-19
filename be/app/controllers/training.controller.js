const { mongoose } = require('mongoose')
const BodyIndexService = require('../services/bodyIndexService')
const ExerciseService = require('../services/exerciseService')
const db = require('../models')
const User = db.user
const Goal = db.goal
const BodyParams = db.body_param
const TrainingPlan = db.training_plan
const Exercise = db.exercise
const constants = require('../constants')

const adminId = constants.ADMIN_ID

exports.calculateRecommendTraining = async (req, res) => {
  try {
    const userId = req.userId
    const { name } = req.body

    const user = await User.findById(userId)
    const bodyFatIndex = BodyIndexService.calculateBodyFatIndex(
      user.gender ? 'male' : 'female',
      user.neck,
      user.waist,
      user.hip,
      user.height
    )

    const bodyParams = await BodyParams.findOne({ type: BodyIndexService.determineBodyParamsType(bodyFatIndex) })

    if (!bodyParams) {
      throw new Error('Failed to find bodyParams')
    }

    const goal = await Goal.findOne({ name })

    if (!goal) {
      throw new Error('Failed to find goal')
    }

    const trainingPlan = await TrainingPlan.findOne({
      goal_id: goal._id,
      body_params_id: bodyParams._id,
      user_id: adminId
    })

    if (!trainingPlan) {
      return res.status(200).json({ message: 'No training plan fit you :>' })
    }

    const newTrainingPlan = new TrainingPlan({
      name: trainingPlan.name,
      level: trainingPlan.level,
      description: trainingPlan.description,
      body_params_id: trainingPlan.body_params_id,
      goal_id: trainingPlan.goal_id,
      user_id: userId
    })

    await newTrainingPlan.save()

    ExerciseService.cloneExerciseTraining(newTrainingPlan._id, trainingPlan._id)

    const exerciseOverall = await ExerciseService.getExerciseOverall(trainingPlan._id)

    const response = {
      training_plan_id: trainingPlan._id,
      name: trainingPlan.name,
      description: trainingPlan.description,
      type: trainingPlan.type,
      exerciseOverall: exerciseOverall
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

exports.getRecommendTrainingById = async (req, res) => {
  try {
    const userId = req.userId
    const { training_plan_id } = req.params

    const trainingPlan = await TrainingPlan.findOne({
      _id: new mongoose.Types.ObjectId(training_plan_id),
      user_id: userId
    })

    if (!trainingPlan) {
      return res.status(400).json({ message: 'No training plan or this training plan do not belong to user' })
    }

    const goalDetails = await Goal.findById(trainingPlan.goal_id)

    const exerciseOverall = await ExerciseService.getExerciseOverall(trainingPlan._id)

    const response = {
      training_plan_id: trainingPlan._id,
      name: trainingPlan.name,
      description: trainingPlan.description,
      type: trainingPlan.type,
      goalDetails: goalDetails,
      exerciseOverall: exerciseOverall
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

exports.getLatestRecommendTrainingByUser = async (req, res) => {
  try {
    const userId = req.userId

    const trainingPlans = await TrainingPlan.find({ user_id: userId }).sort({ createdAt: -1 })

    if (!trainingPlans || trainingPlans.length === 0) {
      return res.status(404).json({ message: 'No training plan' })
    }

    const latestTrainingPlan = trainingPlans[0]

    const goalDetails = await Goal.findById(latestTrainingPlan.goal_id)

    const exerciseOverall = await ExerciseService.getExerciseOverall(latestTrainingPlan._id)

    const response = {
      training_plan_id: latestTrainingPlan._id,
      name: latestTrainingPlan.name,
      description: latestTrainingPlan.description,
      type: latestTrainingPlan.type,
      goalDetails: goalDetails,
      exerciseOverall: exerciseOverall
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

exports.getExercisesPerDay = async (req, res) => {
  try {
    const userId = req.userId
    const day = req.params.day

    const trainingPlans = await TrainingPlan.find({ user_id: userId }).sort({ createdAt: -1 })

    if (!trainingPlans || trainingPlans.length === 0) {
      return res.status(404).json({ message: 'No training plan' })
    }

    const latestTrainingPlan = trainingPlans[0]

    const exerciseDetail = await ExerciseService.getExerciseDetailByDay(latestTrainingPlan._id, day)

    const response = {
      training_plan_id: latestTrainingPlan._id,
      exerciseDetail: exerciseDetail
    }

    res.status(200).json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Lỗi Server Nội Bộ' })
  }
}

exports.getExersice = async (req, res) => {
  try {
    const { exerciseId } = req.params

    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise is not available' })
    }

    res.status(200).json(exercise)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
