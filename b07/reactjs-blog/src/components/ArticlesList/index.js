import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleItem from '../ArticleItem';
import Button from '../common/Button';
import Col from '../common/Col';
import Container from '../common/Container';
import MainTitle from '../MainTitle';
import { actFetchPostsAsync } from '../../store/posts/actions';

export default function ArticlesList() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const articlesPaging = useSelector(state => state.Posts.articlesPaging);
  const {
    items: posts,
    page,
    per_page,
    // total_element,
    total_pages
  } = articlesPaging;
  const hasMoreItems = page < total_pages;

  async function handleLoadMore() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    await dispatch(actFetchPostsAsync({
      page: page + 1,
      per_page: per_page,
    }))
    setIsLoading(false);
    // .then(res => {
    //   setIsLoading(false);
    // })
  }

  return (
    <div className="articles-list section">
      <Container>
        <MainTitle>Danh sách bài viết</MainTitle>

        <div className="tcl-row">
          {
            posts.map(post => {
              return (
                <Col xs={12} md={6} key={post.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} post={post} />
                </Col>
              )
            })
          }
        </div>
        
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