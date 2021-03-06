import { 
  ACT_SET_COMMENTS_REPLY,
  ACT_SET_COMMENTS_PARENT, 
  ACT_RESET_COMMENTS_PARENT,
  ACT_INIT_COMMENTS_REPLY_PAGING,
  ACT_ADD_NEW_COMMENT_PARENT,
  ACT_ADD_NEW_COMMENT_CHILD,
} from './actions';

const initState = {
  commentsParentPaging: genPagingObj(),
  commentsReplyPaging: {
  
  }
}

export function genPagingObj() {
  return {
    items: [],
    page: 0,
    per_page: 2,
    total_element: 0,
    exclude: []
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_ADD_NEW_COMMENT_CHILD:
      let key = 'parent-id-' + action.payload.parentId;
      return {
        ...state,
        commentsParentPaging: {
          ...state.commentsParentPaging,
          items: state.commentsParentPaging.items.map(item => {
            if (item.id === action.payload.parentId) {
              return {
                ...item,
                comment_reply_count: item.comment_reply_count + 1
              }
            }
            return item;
          })
        },
        commentsReplyPaging: {
          ...state.commentsReplyPaging,
          [key]: {
            ...state.commentsReplyPaging[key],
            exclude: [
              ...state.commentsReplyPaging[key].exclude,
              action.payload.newComment.id
            ],
            items: [
              ...state.commentsReplyPaging[key].items,
              action.payload.newComment
            ]
          }
        }
      }
    case ACT_ADD_NEW_COMMENT_PARENT:
      return {
        ...state,
        commentsParentPaging: {
          ...state.commentsParentPaging,
          exclude: [
            ...state.commentsParentPaging.exclude,
            action.payload.newComment.id
          ],
          items: [
            ...state.commentsParentPaging.items,
            action.payload.newComment
          ]
        }
      }
    case ACT_INIT_COMMENTS_REPLY_PAGING:
      const newCmtsReplyPaging = {
        ...state.commentsReplyPaging
      }

      for(let index = 0; index < action.payload.comments.length ; index++) {
        let parentCmt = action.payload.comments[index];
        let idParentCmt = parentCmt.id;
        let key = 'parent-id-' + idParentCmt;

        if (!newCmtsReplyPaging[key]) {
          newCmtsReplyPaging[key] = genPagingObj();
        }
      }

      return {
        ...state,
        commentsReplyPaging: newCmtsReplyPaging
      }
    case ACT_RESET_COMMENTS_PARENT:
      return {
        ...state,
        commentsParentPaging: genPagingObj(),
        commentsReplyPaging: {
          
        }
      }
    case ACT_SET_COMMENTS_REPLY:
      const keyReply = 'parent-id-' + action.payload.parentId;
      
      return {
        ...state,
        commentsReplyPaging: {
          ...state.commentsReplyPaging,
          [keyReply]: {
            ...state.commentsReplyPaging[keyReply],
            items: action.payload.page === 1 
              ? [
                ...action.payload.comments,
                ...state.commentsReplyPaging[keyReply].items
              ] 
              : [
                ...state.commentsReplyPaging[keyReply].items,
                ...action.payload.comments
              ],
            page: action.payload.page,
            per_page: action.payload.per_page,
            total_element: action.payload.total_element,
            total_pages: action.payload.total_pages,
          }
        }
      }
    case ACT_SET_COMMENTS_PARENT:
      return {
        ...state,
        commentsParentPaging: {
          ...state.commentsParentPaging,
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