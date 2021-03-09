import api from "./api"

export const CategoriesService = {
  getList({
    per_page = 100,
    page = 1,
    ...restParams
  } = {}) {
    return api.get('/wp/v2/categories', {
      params: {
        per_page: per_page,
        page: page,
        lang: 'vi',
        ...restParams
      }
    })
  },
}