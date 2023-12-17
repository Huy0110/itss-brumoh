const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, min: 1, max: 3 },
  video: { type: String, required: true },
  description: { type: String },
  type: { type: Number, enum: [1, 2, 3, 4, 5], required: true }
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
