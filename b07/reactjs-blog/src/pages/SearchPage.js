import Col from '../components/common/Col';
import Container from '../components/common/Container';
import ArticleItem from '../components/ArticleItem';
import MainTitle from '../components/MainTitle';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { actFetchPostsAsync, actResetPosts } from '../store/posts/actions';
import { usePaging } from '../hooks/usePaging';
import Button from '../components/common/Button';

// Tách ra chung 1 hàm -> Hooks
// -> Tự tạo cho riêng mình 1 cái hooks 
// -> Custom Hooks 
// -> Có thể dùng những Hooks khác
function SearchPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchStr = queryString.parse(location.search).q;

  const { 
    items: posts,
    isLoading,
    hasMoreItems,
    total_element,
    handleLoadMore
  } = usePaging({
    extraParams: { search: searchStr }
  });

  useEffect(() => {
    if (!searchStr) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStr])

  useEffect(() => {
    dispatch(actFetchPostsAsync({
      search: searchStr
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStr])

  useEffect(() => {
    return () => {
      dispatch(actResetPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {
          hasMoreItems && (
            <div className="text-center">
              <Button 
                size="large" 
                variant="primary" 
                loading={isLoading}
                onClick={handleLoadMore}
              >Tải thêm</Button>
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default SearchPage;