import Col from '../components/common/Col';
import Container from '../components/common/Container';
import ArticleItem from '../components/ArticleItem';
import MainTitle from '../components/MainTitle';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { actFetchPostsAsync, actResetPosts } from '../store/posts/actions';
import Button from '../components/common/Button';

function SearchPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchStr = queryString.parse(location.search).q;
  const articlesPaging = useSelector(state => state.Posts.articlesPaging);
  
  useEffect(() => {
    if (!searchStr) {
      history.push('/');
    }
  }, [searchStr])

  useEffect(() => {
    dispatch(actFetchPostsAsync({
      search: searchStr
    }))
  }, [searchStr])

  useEffect(() => {
    return () => {
      dispatch(actResetPosts());
    }
  }, [])

  const {
    items: posts,
    // page,
    // per_page,
    // total_pages,
    total_element
  } = articlesPaging;

  return (
    <div className="articles-list section">
      <Container>
        <MainTitle isSearch>Có {total_element} kết quả tìm kiếm với từ khoá "{searchStr}"</MainTitle>
        {
          posts.map(post => (
            <div className="tcl-row tcl-jc-center" key={post.id}>
              <Col xs={12} md={8}>
                <ArticleItem post={post} isStyleCard isShowDesc isShowCategoies isShowAvatar/>
              </Col>
            </div>
          ))
        }
        <div className="text-center">
          <Button 
            size="large" 
            variant="primary" 
            // loading={isLoading}
            // onClick={handleLoadMore}
          >Tải thêm</Button>
        </div>
      </Container>
    </div>
  )
}

export default SearchPage;