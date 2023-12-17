const mongoose = require('mongoose')

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: Number,
    gender: Boolean,
    height: Number,
    weight: Number,
    bust: Number,
    waist: Number,
    hip: Number,
    neck: Number,
    activity_intensity: Number,
    is_first_time: Boolean,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
      }
    ]
  })
)

module.exports = User
