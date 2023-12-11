const { authJwt } = require('../middlewares')
const controller = require('../controllers/user.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })

  app.get('/api/test/all', controller.allAccess)

  app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard)

  app.get('/me', [authJwt.verifyToken], controller.getMyProfile)

  // Lấy chỉ số cơ thể của người dùng
  app.get('/body', [authJwt.verifyToken], controller.getBodyMeasurements)

  // Thêm hoặc cập nhật chỉ số cơ thể của người dùng
  app.post('/body', [authJwt.verifyToken], controller.createOrUpdateBodyMeasurements)

  // Xóa chỉ số cơ thể của người dùng
  app.delete('/body', [authJwt.verifyToken], controller.deleteBodyMeasurements)
}
