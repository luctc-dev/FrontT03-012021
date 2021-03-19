import './post-detail.css';
import './related-posts.css';
import './comments.css';
import './post-author.css';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actFetchPostDetailAsync } from '../../store/posts/actions';
import Button from '../../components/common/Button';
import Col from '../../components/common/Col';
import Container from '../../components/common/Container';
import PostDetailContent from '../../components/PostDetail/PostDetailContent';
import PostDetailHead from '../../components/PostDetail/PostDetailHead'
import { actResetComments } from '../../store/comments/actions';

function PostDetail() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState('loading'); // loading , success , error 

  const slug = params.slug;

  useEffect(() => {
    return () => {
      dispatch(actResetComments())
    }
  }, [slug, dispatch])

  useEffect(() => {
    setLoadingStatus('loading');
    dispatch(
      actFetchPostDetailAsync({
        slug: slug
      })
    ).then(data => {
      if (data.ok) {
        setLoadingStatus('success');
      } else {
        setLoadingStatus('error');
      }
    })
  }, [slug, dispatch])

  if (loadingStatus === 'loading') {
    return (
      <Container>
        <h1>...Loading...</h1>
      </Container>
    );
  }

  if (loadingStatus === 'error') {
    return (
      <Container>
        <div className="tcl-row">
          <Col xs={2}></Col>
          <Col xs={4}>
            <img src="https://cdn.24h.com.vn//images/404img_092018.png" alt="" />
          </Col>
          <Col xs={4}>
            <h2>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h2>
            <Button onClick={() => {
              history.push('/')
            }}>Quay lại trang chủ</Button>
          </Col>
          <Col xs={2}></Col>
        </div>
      </Container>
    );
  }

  return (
    <main className="post-detail">
      <div className="spacing" />
      {/* Post Detail Head */}
      <PostDetailHead />
      {/* End Post Detail Head */}
      <div className="spacing" />
      {/* Post Detail Wrapper Content */}
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <PostDetailContent />
        </div>
      </div>
      {/* End Post Detail Wrapper Content */}
    </main>

  )
}

export default PostDetail;