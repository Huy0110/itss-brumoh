const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
})

const Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal
