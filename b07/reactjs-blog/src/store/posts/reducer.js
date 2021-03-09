import {
  ACT_FETCH_POSTS,
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS
} from './actions';

const initPostsState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesList: []
}

export default function postsReducer(state = initPostsState, action) {
  switch (action.type) {
    case ACT_FETCH_POSTS:
      return {
        ...state,
        articlesList: action.payload.posts
      }
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...state,
        articlesLatest: action.payload.posts,
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...state,
        articlesPopular: action.payload.posts
      }
    default:
      return state
  }
}