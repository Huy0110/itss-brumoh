const { mongoose } = require('mongoose')
const db = require('../models')
const User = db.user
const Role = db.role
exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.')
}

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.')
}

exports.getMyProfile = async (req, res) => {
  try {
    // Lấy thông tin người dùng hiện tại từ JWT token đã xác thực
    const userId = req.userId

    // Sử dụng Mongoose để tìm người dùng dựa trên userId
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    // Lấy danh sách các vai trò của người dùng
    const roles = await Role.find({ _id: { $in: user.roles } })

    // Loại bỏ mật khẩu khỏi thông tin người dùng
    const userWithoutPassword = {
      _id: user._id,
      email: user.email,
      roles: roles.map((role) => role.name)
    }

    res.status(200).json(userWithoutPassword)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// API để lấy chỉ số cơ thể của người dùng
exports.getBodyMeasurements = async (req, res) => {
  try {
    const userId = req.userId
    const user = await User.findById(userId).select('height weight bust waist hip')

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ bodyMeasurements: user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// API để thêm hoặc cập nhật chỉ số cơ thể của người dùng
exports.createOrUpdateBodyMeasurements = async (req, res) => {
  try {
    const userId = req.userId
    const { height, weight, bust, waist, hip } = req.body

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          height,
          weight,
          bust,
          waist,
          hip
        }
      },
      { new: true }
    ).select('height weight bust waist hip')

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'Body measurements updated successfully', bodyMeasurements: updatedUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// API để xóa chỉ số cơ thể của người dùng
exports.deleteBodyMeasurements = async (req, res) => {
  try {
    const userId = req.userId

    const deletedUser = await User.findByIdAndUpdate(
      userId,
      {
        $unset: {
          height: '',
          weight: '',
          bust: '',
          waist: '',
          hip: ''
        }
      },
      { new: true }
    ).select('height weight bust waist hip')

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'Body measurements deleted successfully', bodyMeasurements: deletedUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
