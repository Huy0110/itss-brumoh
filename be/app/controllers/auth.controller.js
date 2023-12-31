const config = require('../config/auth.config')
const db = require('../models')
const User = db.user
const Role = db.role

let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    is_first_time: true
  })

  user
    .save()
    .then((savedUser) => {
      if (req.body.roles) {
        if (req.body.roles == 'admin') {
          res.status(500).send({ message: 'Can not sign up with admin' })
        }
        Role.find({ name: { $in: req.body.roles } })
          .then((roles) => {
            user.roles = roles.map((role) => role._id)
            user.save()
            res.send({ message: 'User was registered successfully!' })
          })
          .catch((err) => {
            res.status(500).send({ message: err })
          })
      } else {
        Role.findOne({ name: 'user' })
          .then((role) => {
            user.roles = [role._id]
            user.save()
            res.send({ message: 'User was registered successfully!' })
          })
          .catch((err) => {
            res.status(500).send({ message: err })
          })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err })
    })
}

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate('roles', '-__v')
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Email Not found.' })
      }

      let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        })
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400 // 24 hours
      })

      let authorities = user.roles.map((role) => 'ROLE_' + role.name.toUpperCase())

      res.status(200).send({
        id: user._id,
        is_first_time: user.is_first_time,
        email: user.email,
        roles: authorities,
        accessToken: token
      })
    })
    .catch((err) => {
      res.status(500).send({ message: err })
    })
}
