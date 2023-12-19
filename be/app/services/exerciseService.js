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

  static async getExerciseDetailByDay(trainingPlanId, day) {
    try {
      const trainingSessions = await ExerciseTraining.find({ training_plan_id: trainingPlanId, day: day })
      const exerciseDetail = []

      await Promise.all(
        trainingSessions.map(async (session) => {
          const { exercise_id } = session

          try {
            const exercise = await Exercise.findById(exercise_id.toString())

            if (exercise) {
              exerciseDetail.push({
                name: exercise.name,
                level: exercise.level,
                video: exercise.video,
                description: exercise.description,
                effectiveness: exercise.effectiveness,
                type: exercise.type
              })
            } else {
              throw new Error('Failed to find exercise')
            }
          } catch (error) {
            console.error(error)
            throw error
          }
        })
      )

      return exerciseDetail
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async cloneExerciseTraining(trainingPlanId, trainingPlanDefaultId) {
    try {
      const exerciseTrainingDocs = await ExerciseTraining.find({ training_plan_id: trainingPlanDefaultId })

      const newExerciseTrainingDocs = exerciseTrainingDocs.map((doc) => ({
        training_plan_id: trainingPlanId,
        exercise_id: doc.exercise_id,
        day: doc.day
      }))

      // Lưu các bản ghi mới vào cơ sở dữ liệu
      await ExerciseTraining.insertMany(newExerciseTrainingDocs)

      return newExerciseTrainingDocs
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

module.exports = ExerciseService
