import privateHttp from './http/privateHttp.config'
import publicHttp from './http/publicHttp.config'

const USER = {
  me: () =>
    privateHttp({
      method: 'GET',
      url: '/me'
    }),
  login: async ({ email, password }) => {
    let result = await publicHttp({
      method: 'POST',
      url: 'auth/signin',
      data: {
        email,
        password
      }
    })

    console.log('result: ', result)
    return result
  },

  getBoard: async () => {
    return await publicHttp({
      method: 'GET',
      url: `api/test/user`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  createOrUpdateBodyMeasurements: async ({
    height,
    weight,
    neck,
    bust,
    waist,
    hip,
    activity_intensity,
    age,
    gender
  }) => {
    return await privateHttp({
      method: 'POST',
      url: `body`,
      data: {
        height,
        weight,
        neck,
        bust,
        waist,
        hip,
        activity_intensity,
        age,
        gender
      }
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },
  selectTrainingGoal: async ({goal}) => {
    try {
      let result = await privateHttp({
        method: 'POST',
        url: '/calculate-training-plan',
        data: {
          name: goal,
        }
      });
      console.log('result: ', result);
      return result;
    } catch (error) {
      console.error('Error in selectTrainingGoal:', error);
      throw error; // rethrow the error to propagate it further if needed
    }
  },

  getExercise: async ({ id }) => {
    return await privateHttp({
      method: 'GET',
      url: `exercise/${id}`
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  },

  getTrainingPlan: async () => {
    return await privateHttp({
      method: 'GET',
      url: '/get-latest-training-plan-user'
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return err
      })
  }
}

export default USER
