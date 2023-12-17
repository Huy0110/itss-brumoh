const mongoose = require('mongoose')

const bodyParamsSchema = new mongoose.Schema({
  type: { type: String, enum: ['<10', '10-15', '15-20', '>20'], required: true },
  name: { type: String },
  img: { type: String },
  description: { type: String }
})

const BodyParams = mongoose.model('BodyParams', bodyParamsSchema)

module.exports = BodyParams
