import api from "./api"

export const CommentsService = {
  getCommentsByPostId({
    per_page = 100,
    page = 1,
    post,
    parent = 0,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/comments', {
      params: {
        per_page: per_page,
        page: page,
        post,
        parent,
        order: 'asc',
        lang: 'vi',
        ...restParams
      }
    })
  },
  postNewComment({
    authorId,
    content,
    postId,
    parentId
  }) {
    return api.callWithToken().post('/wp/v2/comments', {
      author: authorId,
      content,
      post: postId,
      parent: parentId
    })
  }
}