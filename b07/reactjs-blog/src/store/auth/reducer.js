import { ACT_FETCH_ME_INFO } from "./actions";

export const TOKEN_KEY = 'xssss';

const initAuthState = {
  currentUser: null,
  token: localStorage.getItem(TOKEN_KEY) // F5 lại trang
}

export default function authReducer(state = initAuthState, action) {
  switch (action.type) {
    case ACT_FETCH_ME_INFO:
      return {
        ...state,
        token: localStorage.getItem(TOKEN_KEY),
        currentUser: action.payload.currentUser
      }
    default:
      return state;
  }
}