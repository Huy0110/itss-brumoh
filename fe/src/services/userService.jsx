import privateHttp from "./http/privateHttp.config";
import publicHttp from "./http/publicHttp.config";

const USER = {
  me: () => privateHttp({
    method: 'GET',
    url: '/me'
  }),
  login: async ({email, password}) => {
    let result = await publicHttp({
        method: 'POST',
        url: 'auth/signin',
        data: {
            email,
            password
        }
    });

    console.log("result: ", result)
    return result;
  },

  getBoard: async () => {
    return await publicHttp({
      method: 'GET',
      url: `api/test/user`,
    }).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  },
}

export default USER;
