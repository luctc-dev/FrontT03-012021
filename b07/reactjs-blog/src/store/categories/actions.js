import { CategoriesService } from "../../services/categoris";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

export function actFetchCategories(categories) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories
    }
  }
}

export function actFetchCategoriesAsync() {
  return async (dispatch, getState) => {
    try {
      const response = await CategoriesService.getList();
      const categories = response.data;

      dispatch(actFetchCategories(categories))

    } catch(err) {

    }
  }
}