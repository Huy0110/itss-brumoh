const db = require('../models')
const ExerciseTraining = db.exercise_training
const Exercise = db.exercise

class ExerciseService {
  static async getExerciseOverall(trainingPlanId) {
    try {
      const trainingSessions = await ExerciseTraining.find({ training_plan_id: trainingPlanId })
      const dayMap = new Map()

      await Promise.all(
        trainingSessions.map(async (session) => {
          const { day, exercise_id } = session

          if (!dayMap.has(day)) {
            dayMap.set(day, {
              day,
              exerciseCount: 0,
              exerciseId: [],
              type: []
            })
          }

          dayMap.get(day).exerciseCount++
          dayMap.get(day).exerciseId.push(exercise_id.toString())

          try {
            const exercise = await Exercise.findById(exercise_id.toString())

            if (exercise) {
              if (!dayMap.get(day).type.includes(exercise.type)) {
                dayMap.get(day).type.push(exercise.type)
              }
            } else {
              throw new Error('Failed to find exercise')
            }
          } catch (error) {
            console.error(error)
            throw error
          }
        })
      )

      const exerciseOverall = Array.from(dayMap.values())
      return exerciseOverall
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

module.exports = ExerciseService

module.exports = ExerciseService
