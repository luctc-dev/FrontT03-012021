import { CommentsService } from "../../services/comments";

export const ACT_SET_COMMENTS_PARENT = 'ACT_SET_COMMENTS_PARENT';
export const ACT_SET_COMMENTS_REPLY = 'ACT_SET_COMMENTS_REPLY';
export const ACT_RESET_COMMENTS_PARENT = 'ACT_RESET_COMMENTS_PARENT';
export const ACT_INIT_COMMENTS_REPLY_PAGING = 'ACT_INIT_COMMENTS_REPLY_PAGING';
export const ACT_ADD_NEW_COMMENT_PARENT = 'ACT_ADD_NEW_COMMENT_PARENT';
export const ACT_ADD_NEW_COMMENT_CHILD = 'ACT_ADD_NEW_COMMENT_CHILD';

export function actInitCommentsReplyPaging(comments) {
  return {
    type: ACT_INIT_COMMENTS_REPLY_PAGING,
    payload: {
      comments
    }
  }
}

export function actResetComments() {
  return {
    type: ACT_RESET_COMMENTS_PARENT,
  }
}

export function actAddNewComment({
  comment: newComment,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_ADD_NEW_COMMENT_PARENT : ACT_ADD_NEW_COMMENT_CHILD,
    payload: {
      newComment,
      parentId
    }
  }
}

export const actFetchComments = ({ 
  comments, 
  page, 
  per_page, 
  total_element,
  total_pages,
  parentId = 0
} = {}) => {


  return {
    type: parentId === 0 ? ACT_SET_COMMENTS_PARENT : ACT_SET_COMMENTS_REPLY,
    payload: { 
      comments, 
      page, 
      per_page, 
      total_pages, 
      total_element,
      parentId
    }
  }
}

export function actFetchCommentsAsync({
  page = 1,
  per_page = 3,
  parentId = 0,
  postId,
  ...restParams
}) {
  return async (dispatch) => {
    try {
      
      const response = await CommentsService.getCommentsByPostId({
        page,
        per_page,
        post: postId,
        parent: parentId,
        ...restParams
      })
      const headers = response.headers;
      const total_element = Number(headers['x-wp-total']);
      const total_pages = Number(headers['x-wp-totalpages']);
      const comments = response.data;

      dispatch(actFetchComments({
        comments,
        page,
        per_page,
        total_pages,
        parentId,
        total_element
      }));

      if (parentId === 0) {
        dispatch(actInitCommentsReplyPaging(comments))
      }
     
    } catch(e) {

    }
  }
}

export function actPostNewCommentAsync({
  authorId,
  content,
  postId,
  parentId = 0
}) {
  return async dispatch => {
    try {
      const response = await CommentsService.postNewComment({
        authorId,
        content,
        postId,
        parentId
      });
      const comment = response.data;
      dispatch(actAddNewComment({
        comment,
        parentId
      }));

      return {
        ok: true
      }
    } catch(err) {
      return {
        ok: false,
        error: ''
      }
    }
  }
}