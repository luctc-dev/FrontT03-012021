import { ACT_SET_COMMENTS_PARENT, ACT_RESET_COMMENTS_PARENT } from './actions';

const initState = {
  commentsParentPaging: {
    items: [],
    page: 1,
    per_page: 2,
    total_element: 0
  },
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_RESET_COMMENTS_PARENT:
      return {
        ...state,
        commentsParentPaging: {
          items: [],
          page: 1,
          per_page: 2,
          total_element: 0
        }
      }
    case ACT_SET_COMMENTS_PARENT:
      return {
        ...state,
        commentsParentPaging: {
          items: [
            ...state.commentsParentPaging.items,
            ...action.payload.comments
          ],
          page: action.payload.page,
          per_page: action.payload.per_page,
          total_element: action.payload.total_element,
          total_pages: action.payload.total_pages,
        }
      }
    default:
      return state;
  }
  
}