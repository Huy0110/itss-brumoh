const mongoose = require('mongoose')

const trainingPlanSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  level: { type: Number, min: 1, max: 3, required: true },
  body_params_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BodyParams' },
  goal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const TrainingPlan = mongoose.model('TrainingPlan', trainingPlanSchema)

module.exports = TrainingPlan
