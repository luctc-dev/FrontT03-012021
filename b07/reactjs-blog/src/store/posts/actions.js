import { PostsService } from '../../services/posts';

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';
export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';

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
export function actFetchPosts(posts) {
  return {
    type: ACT_FETCH_POSTS,
    payload: {
      posts
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

export function actFetchPostsAsync() {
  return async (dispatch, getState) => {
    try {
      const res = await PostsService.getList();
      const posts = res.data;

      dispatch(actFetchPosts(posts)) 
    } catch(err) {

    }
  }
}