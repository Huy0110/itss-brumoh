const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('./user.model')
db.role = require('./role.model')
db.body_param = require('./bodyParam.model')
db.exercise_training = require('./exerciseTraining.model')
db.goal = require('./goal.model')
db.training_plan = require('./trainingPlan.model')
db.exercise = require('./exercice.model')

db.ROLES = ['user', 'admin']

module.exports = db
