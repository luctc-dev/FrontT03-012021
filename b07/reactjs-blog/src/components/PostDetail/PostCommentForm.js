import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { actPostNewCommentAsync } from "../../store/comments/actions";
import Button from "../common/Button";

export default function PostCommentForm({ 
  parentId,
  placeholder = 'Nhập bình luận của bạn ...'
}) {
  const dispatch = useDispatch();
  const [commentStr, setCommentStr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const currentUser = useSelector(state => state.Auth.currentUser);
  const postId = useSelector(state => state.Posts.postDetail.id);
  
  const authorId = currentUser.id;
  const avatar = currentUser.simple_local_avatar 
    ? currentUser.simple_local_avatar.full 
    : '/assets/images/avatar1.jpg';

  function onChange(evt) {
    setCommentStr(evt.target.value);
  }

  function handleSubmit() {
    if (isLoading || !commentStr) {
      return;
    }

    setIsLoading(true);
    dispatch(actPostNewCommentAsync({
      authorId,
      postId,
      parentId,
      content: commentStr,
    }))
    .then(res => {
      setIsLoading(false);
      
      if (res.ok) {
        setCommentStr('');
      } else {
        alert('Binh luan that bai');
      }
    })
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={avatar} alt="" />
          </a>
        </div>
        <textarea value={commentStr} onChange={onChange} placeholder={placeholder} />
      </div>
      <div className="text-right">
        <Button loading={isLoading} onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}