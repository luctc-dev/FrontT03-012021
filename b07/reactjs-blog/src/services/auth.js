
import api from "./api"

const cachedData = { }

export const AuthService = {
  login({
    username,
    password
  }) {
    return api.call().post('/jwt-auth/v1/token', {
      username,
      password
    })
  },
  async getMeInfo() {
    const url = '/wp/v2/users/me';

    if (cachedData[url]) {
      return cachedData[url];
    }

    const response = await  api.callWithToken().get(url);
    cachedData[url] = response;
    return response
  }
}