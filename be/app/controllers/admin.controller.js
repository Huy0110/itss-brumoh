const { mongoose } = require('mongoose')
const db = require('../models')
const Exercise = db.exercise
const TrainingPlan = db.training_plan
const BodyParams = db.body_param
const ExerciseTraining = db.exercise_training
const Goal = db.goal

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.')
}

exports.createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    res.status(201).send(exercise)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.createTrainingPlan = async (req, res) => {
  try {
    const trainingPlan = new TrainingPlan(req.body)
    await trainingPlan.save()
    res.status(201).send(trainingPlan)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.createBodyParams = async (req, res) => {
  try {
    const bodyParams = new BodyParams(req.body)
    await bodyParams.save()
    res.status(201).send(bodyParams)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.createExerciseTraining = async (req, res) => {
  try {
    const exerciseTraining = new ExerciseTraining(req.body)
    await exerciseTraining.save()
    res.status(201).send(exerciseTraining)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.createGoal = async (req, res) => {
  try {
    const goal = new Goal(req.body)
    await goal.save()
    res.status(201).send(goal)
  } catch (error) {
    res.status(400).send(error)
  }
}
