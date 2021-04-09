import { ACT_CHANGE_LANG } from './actions';

const initState = {
  lang: localStorage.getItem('lang') || 'vi'
}

export default function reducer(state = initState, action) {

  if (action.type === ACT_CHANGE_LANG) {
    localStorage.setItem('lang', action.payload.lang)
    return {
      ...state,
      lang: action.payload.lang
    }
  }
  return state;
}