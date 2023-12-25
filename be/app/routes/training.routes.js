const { authJwt } = require('../middlewares')
const controller = require('../controllers/training.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })

  app.post('/calculate-training-plan', [authJwt.verifyToken], controller.calculateRecommendTraining)
  app.get('/get-training-plan/:training_plan_id', [authJwt.verifyToken], controller.getRecommendTrainingById)
  app.get('/get-latest-training-plan-user', [authJwt.verifyToken], controller.getLatestRecommendTrainingByUser)
  app.get('/exercise/:exerciseId', controller.getExersice)
  app.get('/exercise-detail/:day', [authJwt.verifyToken], controller.getExercisesPerDay)
  app.get('/exercise-by-type', controller.getExerciseByType)
  app.post('/save-training-plan', [authJwt.verifyToken], controller.saveTrainingPlan)
}
