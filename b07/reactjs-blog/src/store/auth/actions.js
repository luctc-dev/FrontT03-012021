import { AuthService } from "../../services/auth"
import { TOKEN_KEY } from "./reducer";

export const ACT_FETCH_ME_INFO = 'ACT_FETCH_ME_INFO';

export function actFetchMeInfo(currentUser) {
  return {
    type: ACT_FETCH_ME_INFO,
    payload: {
      currentUser
    }
  }
}

export function actFetchMeInfoAsync() {
  return async dispatch => {
    try {
      const response = await AuthService.getMeInfo();
      dispatch(actFetchMeInfo(response.data));
    } catch(err) {
      localStorage.removeItem(TOKEN_KEY);
    }
  }
}

export function actLoginAsync({
  username,
  password
}) {
  return async dispatch => {
    try {
      const response = await AuthService.login({
        username,
        password
      })
      const data = response.data;
      const token = data.token;
      localStorage.setItem(TOKEN_KEY, token);
      dispatch(actFetchMeInfoAsync())

      return {
        ok: true
      }
    } catch(err) {
      return {
        ok: false,
        error: '?????'
      }
    }
  }
}