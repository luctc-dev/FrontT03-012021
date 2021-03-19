import api from "./api"

export const CommentsService = {
  getCommentsByPostId({
    per_page = 100,
    page = 1,
    post,
    parent = 0
  } = {}) {
    return api.get('/wp/v2/comments', {
      params: {
        per_page: per_page,
        page: page,
        post,
        parent,
        lang: 'vi'
      }
    })
  },
}