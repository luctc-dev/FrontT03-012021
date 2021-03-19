// import PostCommentForm from "./PostCommentForm";

export default function PostCommentItem({ isParent, comment }) {
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

      {/* <ul className="comments">
        {
          isParent && <PostCommentItem isParent={false} />
        }
      </ul> */}
      
      {/* <PostCommentForm /> */}
    </li>
  )
}