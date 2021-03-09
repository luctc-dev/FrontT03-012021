import api from "./api"

export const PostsService = {
  getList({
    per_page = 3,
    page = 1,
    ...restParams // { orderBy }
  } = {}) {
    return api.get('/wp/v2/posts', {
      params: {
        per_page: per_page,
        page: page,
        lang: 'vi',
        ...restParams
      }
    })
  },
  getLatestList() {
    return PostsService.getList()
  },
  getPopularList() {
    return PostsService.getList({
      orderby: 'post_views'
    });
  }
}