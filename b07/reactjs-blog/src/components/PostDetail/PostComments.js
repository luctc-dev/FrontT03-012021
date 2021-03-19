import PostCommentForm from "./PostCommentForm"
import PostCommentItem from "./PostCommentItem"

export default function PostComments() {
  return (
    <div className="post-detail__comments">
      <PostCommentForm />
      <p>20 Comments</p>
      <ul className="comments">
        <PostCommentItem isParent={true} />
        <PostCommentItem isParent={true} />
        <PostCommentItem isParent={true} />
      </ul>
    </div>

  )
}