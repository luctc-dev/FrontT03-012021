
import { TOKEN_KEY } from "../store/auth/reducer"
import api from "./api"

export const AuthService = {
  login({
    username,
    password
  }) {
    return api.post('/jwt-auth/v1/token', {
      username,
      password
    })
  },
  getMeInfo() {
    return api.get('/wp/v2/users/me', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY)
      }
    })
  }
}