import { ACT_FETCH_CATEGORIES } from './actions';

const initState = {
  categories: [],
  hashCategories: {}
}

export default function categoriesReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:

      // Biến đổi data trước khi lưu
      /*
        categories = [
          { id: 20, label: 'Front End' },
          { id: 50, label: 'Back End' }
        ]
      */

      /*
        hashCategories = {
          20: { id: 20, label: 'Front End' },
          50: { id: 50, label: 'Back End' }
        }
      */
      const hashCategories = {}

      for(let index = 0; index < action.payload.categories.length; index++) {
        const value = action.payload.categories[index]; // {}
        const key = value.id; // so

        hashCategories[key] = value;
      }

      return {
        ...state,
        hashCategories: hashCategories,
        categories: action.payload.categories
      }
    default:
      return state;
  }
}