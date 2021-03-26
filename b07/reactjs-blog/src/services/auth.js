
import api from "./api"

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
  getMeInfo() {
    return api.callWithToken().get('/wp/v2/users/me')
  }
}