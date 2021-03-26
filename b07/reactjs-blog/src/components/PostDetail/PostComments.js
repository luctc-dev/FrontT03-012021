import Button from '../common/Button';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { usePaging } from "../../hooks/usePaging"
import PostCommentForm from "./PostCommentForm"
import PostCommentItem from "./PostCommentItem"
import { actFetchCommentsAsync } from '../../store/comments/actions';

export default function PostComments() {
  const postDetail = useSelector(state => state.Posts.postDetail);
  const isLogin = useSelector(state => !!state.Auth.currentUser);
  const exclude = useSelector(state => state.Comments.commentsParentPaging.exclude);
  const postId = postDetail.id;
  console.log('exclude', exclude);
  const {
    items: commentsParent,
    isLoading,
    hasMoreItems,
    // total_element,
    handleLoadMore
  } = usePaging({
    extraParams: {
      postId: postId,
      parentId: 0,
      exclude
    },
    actionAsync: actFetchCommentsAsync,
    funcSelector: state => state.Comments.commentsParentPaging
  });

  return (
    <div className="post-detail__comments">
      { 
      isLogin 
        ? <PostCommentForm parentId={0} /> 
        : <p>Bạn phải <Link to="/login">đăng nhập</Link> mới có quyền bình luận!</p> 
      }
      
      <p>{ postDetail.comment_count } Bình luận</p>
      <ul className="comments">
        {
          commentsParent.map(commentParentItem => {
            return (
              <PostCommentItem 
                isParent
                key={commentParentItem.id} 
                postId={postId}
                comment={commentParentItem} 
              />
            );
          })
        }
      </ul>
      {
        hasMoreItems && (
          <div className="text-center">
            <Button 
              variant="primary" 
              loading={isLoading}
              onClick={handleLoadMore}
            >Tải thêm</Button>
          </div>
        )
      }
    </div>

  )
}