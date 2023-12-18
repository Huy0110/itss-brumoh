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

    // Step 1: Calculate BodyFatIndex
    const user = await User.findById(userId)
    const bodyFatIndex = BodyIndexService.calculateBodyFatIndex(
      user.gender ? 'male' : 'female',
      user.neck,
      user.waist,
      user.hip,
      user.height
    )

    // Step 2: Determine body_params_id based on bodyFatIndex range
    const bodyParams = await BodyParams.findOne({ type: BodyIndexService.determineBodyParamsType(bodyFatIndex) })

    if (!bodyParams) {
      throw new Error('Failed to find bodyParams')
    }

    // Step 3: Find or create a goal
    const goal = await Goal.findOne({ name })

    if (!goal) {
      throw new Error('Failed to find goal')
    }

    // Step 4: Find or create a TrainingPlan
    const trainingPlan = await TrainingPlan.findOne({
      goal_id: goal._id,
      body_params_id: bodyParams._id,
      user_id: adminId
    })

    // Step 5: Save user's training plan
    if (trainingPlan) {
      const newTrainingPlan = new TrainingPlan({
        name: trainingPlan.name,
        level: trainingPlan.level,
        description: trainingPlan.description,
        body_params_id: trainingPlan.body_params_id,
        goal_id: trainingPlan.goal_id,
        user_id: userId
      })

      await newTrainingPlan.save()
    } else {
      return res.status(200).json({ message: 'No training plan fit you :>' })
    }

    // Step 6: Make exerciseOverall
    const exerciseOverall = await ExerciseService.getExerciseOverall(trainingPlan._id)

    // Step 7: Prepare the response
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

exports.getRecommendTraining = async (req, res) => {
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
