const { authJwt } = require('../middlewares')
const controller = require('../controllers/admin.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })

  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard)

  // API nhập cho bảng exercise
  app.post('/admin/exercise', [authJwt.verifyToken, authJwt.isAdmin], controller.createExercise)

  // API nhập cho bảng training_plan
  app.post('/admin/training_plan', [authJwt.verifyToken, authJwt.isAdmin], controller.createTrainingPlan)

  // API nhập cho bảng body_params
  app.post('/admin/body_params', [authJwt.verifyToken, authJwt.isAdmin], controller.createBodyParams)

  // API nhập cho bảng exercise_training
  app.post('/admin/exercise_training', [authJwt.verifyToken, authJwt.isAdmin], controller.createExerciseTraining)

  // API nhập cho bảng goal
  app.post('/admin/goal', [authJwt.verifyToken, authJwt.isAdmin], controller.createGoal)
}
