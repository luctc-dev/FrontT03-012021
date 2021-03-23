// import PostCommentForm from "./PostCommentForm";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePaging } from '../../hooks/usePaging';
import { actFetchCommentsAsync } from '../../store/comments/actions';
import { genPagingObj } from '../../store/comments/reducer';
import Loading from '../common/Loading';

export default function PostCommentItem({ isParent, comment, postId }) {
  const dispatch = useDispatch();
  const cmtParentId = comment.id;
  const [loadingFirstPage, setLoadingFirstPage] = useState(false);
  
  const {
    items: commentsReply,
    page,
    isLoading,
    handleLoadMore
  } = usePaging({
    extraParams: {
      postId: postId,
      parentId: cmtParentId,
    },
    actionAsync: actFetchCommentsAsync,
    funcSelector: state => {
      if (state.Comments.commentsReplyPaging[`parent-id-${cmtParentId}`]) {
        return state.Comments.commentsReplyPaging[`parent-id-${cmtParentId}`];
      }
      return genPagingObj();
    }
  });

  function clickShowReply(evt) {
    evt.preventDefault();

    if (page === 0) {

      if (loadingFirstPage) {
        return;
      }

      setLoadingFirstPage(true);
      dispatch(
        actFetchCommentsAsync({
          page: 1,
          postId: postId,
          parentId: cmtParentId,
        })
      ).then(() => {
        setLoadingFirstPage(false)
      })
    } else {
      handleLoadMore();
    }
  }
  
  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            {
              comment.author_data.avatar 
                ? <img src={comment.author_data.avatar } alt="" /> 
                : <img src="/assets/images/avatar1.jpg" alt="" />
            }
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">{comment.author_name}</a>
          <p className="comments__section--time">2 minutes ago</p>
          <div className="comments__section--text" dangerouslySetInnerHTML={{
            __html: comment.content.rendered
          }}></div>
          <i className="ion-reply comments__section--reply"></i>
        </div>
      </div>
      {
        isParent &&
        comment.comment_reply_count - commentsReply.length > 0 && 
        (
          <div className="comments__hidden">
            <a href="/" onClick={clickShowReply}><i className="icons ion-ios-undo"></i> 
              Xem thêm {comment.comment_reply_count - commentsReply.length} câu trả lời 
              { (isLoading || loadingFirstPage) && <Loading /> }
            </a>
          </div>
        )
      }
      
      
      {
        isParent && commentsReply.length > 0 && (
          <ul className="comments">
            {
              commentsReply.map(cmtReply => {
                return <PostCommentItem key={`parent-${cmtParentId}/child-${cmtReply.id}`} isParent={false} comment={cmtReply} />;
              })
            }
          </ul>
        )
      }
      
      {/* <PostCommentForm /> */}
    </li>
  )
}