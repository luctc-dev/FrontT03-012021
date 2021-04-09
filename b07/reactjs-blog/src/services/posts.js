import api from "./api"

const cachedData = {

}

export const PostsService = {
  async getList({
    per_page = 3,
    page = 1,
    lang,
    ...restParams // { orderBy }
  } = {}) {
    // console.log('[posts] cachedData', cachedData);
    const params = {
      per_page: per_page,
      page: page,
      lang: lang,
      ...restParams
    }
    const strParams = JSON.stringify(params);

    if (cachedData[strParams]) {
      return cachedData[strParams];
    }

    const response = await api.call().get('/wp/v2/posts', {
      params
    })
    
    cachedData[strParams] = response;

    return response;
  },
  getLatestList({ lang }) {
    return PostsService.getList({ lang })
  },
  getPopularList({ lang }) {
    return PostsService.getList({
      orderby: 'post_views',
      lang
    });
  }
}