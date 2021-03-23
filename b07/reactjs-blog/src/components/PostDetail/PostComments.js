import Button from '../common/Button';
import { useSelector } from "react-redux"
import { usePaging } from "../../hooks/usePaging"
import PostCommentForm from "./PostCommentForm"
import PostCommentItem from "./PostCommentItem"
import { actFetchCommentsAsync } from '../../store/comments/actions';

export default function PostComments() {
  const postDetail = useSelector(state => state.Posts.postDetail);
  const postId = postDetail.id;

  const {
    items: commentsParent,
    isLoading,
    hasMoreItems,
    // total_element,
    handleLoadMore
  } 
  = usePaging({
    extraParams: {
      postId: postId,
      parentId: 0
    },
    actionAsync: actFetchCommentsAsync,
    funcSelector: state => state.Comments.commentsParentPaging
  });

  return (
    <div className="post-detail__comments">
      <PostCommentForm />
      <p>20 Comments</p>
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