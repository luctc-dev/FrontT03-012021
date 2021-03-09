import { ACT_FETCH_CATEGORIES } from './actions';

const initState = {
  categories: []
}

export default function categoriesReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories
      }
    default:
      return state;
  }
}