const mongoose = require('mongoose')

const exerciseTrainingSchema = new mongoose.Schema({
  training_plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingPlan' },
  exercise_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
  day: { type: Number, required: true, min: 1, max: 7 }
})

const ExerciseTraining = mongoose.model('ExerciseTraining', exerciseTrainingSchema)

module.exports = ExerciseTraining
