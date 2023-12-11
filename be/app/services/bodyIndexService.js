// bodyIndexService.js

class BodyIndexService {
  static calculateBodyFatIndex(gender, neck, waist, hip, height) {
    if (gender.toLowerCase() === 'male') {
      return 495 / (1.0324 - 0.19077 * Math.log(waist - neck) + 0.15456 * Math.log(height)) - 450
    } else if (gender.toLowerCase() === 'female') {
      return 495 / (1.29579 - 0.35004 * Math.log(waist + hip - neck) + 0.221 * Math.log(height)) - 450
    } else {
      throw new Error('Invalid gender. Use "male" or "female".')
    }
  }

  static calculateBMR(gender, weight, height, age) {
    if (gender.toLowerCase() === 'male') {
      return 66 + 13.7 * weight + 5 * height - 6.8 * age
    } else if (gender.toLowerCase() === 'female') {
      return 655 + 9.6 * weight + 1.8 * height - 4.7 * age
    } else {
      throw new Error('Invalid gender. Use "male" or "female".')
    }
  }

  static calculateTDEE(bmr, activity_intensity) {
    switch (activity_intensity) {
      case 0:
        return bmr * 1.2
      case 1:
      case 2:
        return bmr * 1.375
      case 3:
      case 4:
        return bmr * 1.55
      case 5:
      case 6:
        return bmr * 1.725
      case 7:
        return bmr * 1.9
      default:
        throw new Error('Invalid activity intensity.')
    }
  }
}

module.exports = BodyIndexService
