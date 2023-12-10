const { mongoose } = require('mongoose')
const User = require('../models/user.model')
const Role = require('../models/role.model')
exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.')
}

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.')
}
