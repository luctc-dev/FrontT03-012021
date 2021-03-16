import { PostsService } from '../../services/posts';

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';
export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';
export const ACT_RESET_POSTS = 'ACT_RESET_POSTS';
export const ACT_RELATED_AUTHOR_POSTS = 'ACT_RELATED_AUTHOR_POSTS';
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL';

export function actResetPosts() {
  return {
    type: 'ACT_RESET_POSTS',
  }
}
export function actFetchLatestPosts(posts) {
  return {
    type: ACT_FETCH_LATEST_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPopularPosts(posts) {
  return {
    type: ACT_FETCH_POPULAR_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPosts({ posts, page, per_page, total_element, total_pages }) {
  return {
    type: ACT_FETCH_POSTS,
    payload: {
      posts,
      page,
      per_page,
      total_element,
      total_pages
    }
  }
}
export function actFetchRelatedAuthorPosts(posts) {
  return {
    type: ACT_RELATED_AUTHOR_POSTS,
    payload: {
      posts
    }
  }
}
export function actFetchPostDetail(data) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: {
      data
    }
  }
}

/**
 * 
 * Async Action
 */

export function actFetchLatestPostsAsync() {
  return async (dispatch, getState) => {
    try {
      const res = await PostsService.getLatestList();
      const posts = res.data;

      dispatch(actFetchLatestPosts(posts))
    } catch(err) {

    }
  }
}

export function actFetchPopularPostsAsync() {
  return async (dispatch, getState) => {
    try {
      const res = await PostsService.getPopularList();
      const posts = res.data;

      dispatch(actFetchPopularPosts(posts))
    } catch(err) {

    }
  }
}

export function actFetchPostsAsync({
  page = 1,
  per_page = 2,
  ...restParams // Hàm nào dùng để nối 2 object (gộp 2 object)
} = {}) {
  return async (dispatch, getState) => {
    try {
      const res = await PostsService.getList({
        page, 
        per_page,
        ...restParams
      });
      const total_element = parseInt(res.headers['x-wp-total']);
      const total_pages = parseInt(res.headers['x-wp-totalpages']);
      
      dispatch(actFetchPosts({
        posts: res.data,
        page: page, 
        per_page: per_page, 
        total_element: total_element,
        total_pages: total_pages,
      }))
    } catch(err) {

    }
  }
}

export function actFetchRelatedAuthorPostsAsync({ authorId }) {
  return async dispatch => {
    try {
      const response = await PostsService.getList({
        author: authorId
      })
      const posts = response.data;
      dispatch(actFetchRelatedAuthorPosts(posts))
    } catch(err) {

    }
  }
}

export function actFetchPostDetailAsync({ slug }) {
  return async (dispatch, getState) => {
    try {
      const response = await PostsService.getList({
        slug
      });
      const postDetail = response.data[0];
      const authorId = postDetail.author;
      
      dispatch(actFetchRelatedAuthorPostsAsync({ authorId }));      
      dispatch(actFetchPostDetail(postDetail));

      return {
        ok: true
      }
    } catch(err) {
      
      return {
        ok: false
      }
    }
  }
}