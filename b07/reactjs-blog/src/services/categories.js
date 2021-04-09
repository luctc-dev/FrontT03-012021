import api from "./api"

const cachedData = {

}

export const CategoriesService = {
  async getList({
    per_page = 100,
    page = 1,
    lang,
    ...restParams
  } = {}) {
    const params = {
      per_page: per_page,
      page: page,
      lang: lang,
      ...restParams
    };

    const strParams = JSON.stringify(params);
    // console.log('[categories] cachedData', cachedData)
    // console.log('strParams', strParams)
    if (cachedData[strParams]) {
      return cachedData[strParams];
    }

    const response = await api.call().get('/wp/v2/categories', {
      params
    })
    
    cachedData[strParams] = response;

    return response;
  },
}