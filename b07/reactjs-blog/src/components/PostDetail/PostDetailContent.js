import PostComments from "./PostComments";
import PostDetailTags from "./PostDetailTags";
import { useSelector } from "react-redux";
import PostDetailSidebar from "./PostDetailSidebar";

function PostDetailContent() {
  const post = useSelector(state => state.Posts.postDetail);

  if (!post) {
    return <div></div>;
  }

  return (
    <div className="post-detail__wrapper">
      <div className="post-detail__content">
        <div className="thumbnail">
          <img src={post.featured_media_url} alt={post.title.rendered} />
        </div>
        <div className="content-padding">

          <div className="rte" dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }} />

          <PostDetailTags />

          <PostComments />
        </div>
      </div>
      <PostDetailSidebar />
    </div>
  )
}

export default PostDetailContent;