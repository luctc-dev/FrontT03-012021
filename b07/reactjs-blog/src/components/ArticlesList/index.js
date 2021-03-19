import ArticleItem from '../ArticleItem';
import Button from '../common/Button';
import Col from '../common/Col';
import Container from '../common/Container';
import MainTitle from '../MainTitle';
import { usePaging } from '../../hooks/usePaging';

export default function ArticlesList() {
  const { 
    items: posts,
    isLoading,
    hasMoreItems,
    handleLoadMore
  } = usePaging()

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