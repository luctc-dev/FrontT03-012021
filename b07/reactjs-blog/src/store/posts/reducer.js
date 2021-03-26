import { ACT_ADD_NEW_COMMENT } from '../comments/actions';
import {
  ACT_FETCH_POSTS,
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS,
  ACT_RESET_POSTS,
  ACT_RELATED_AUTHOR_POSTS,
  ACT_FETCH_POST_DETAIL
} from './actions';

const initPostsState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesPaging: {
    items: [],
    page: 1,
    per_page: 2,
    total_element: 0
  },
  relatedAuthorPosts: [],
  postDetail: null
}

export default function postsReducer(state = initPostsState, action) {
  switch (action.type) {
    case ACT_ADD_NEW_COMMENT:
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comment_count: state.postDetail.comment_count + 1
        }
      }
    case ACT_FETCH_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload.data
      }
    case ACT_RELATED_AUTHOR_POSTS:
      return {
        ...state,
        relatedAuthorPosts: action.payload.posts
      }
    case ACT_RESET_POSTS:
      return {
        ...state,
        articlesPaging: {
          items: [],
          page: 1,
          per_page: 2,
          total_element: 0
        }
      }
    case ACT_FETCH_POSTS:
      return {
        ...state,
        articlesPaging: {
          items: action.payload.page === 1 
            ? action.payload.posts 
            : [
              ...state.articlesPaging.items,
              ...action.payload.posts
            ],
          // items: [
          //   ...state.articlesPaging.items,
          //   ...action.payload.posts
          // ],
          page: action.payload.page,
          per_page: action.payload.per_page,
          total_element: action.payload.total_element,
          total_pages: action.payload.total_pages,
        }
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