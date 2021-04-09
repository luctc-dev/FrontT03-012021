import { CategoriesService } from "../../services/categories";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

export function actFetchCategories(categories) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories
    }
  }
}

export function actFetchCategoriesAsync(lang) {
  return async (dispatch, getState) => {
    try {
      const response = await CategoriesService.getList({ lang });
      const categories = response.data;

      dispatch(actFetchCategories(categories))

    } catch(err) {

    }
  }
}