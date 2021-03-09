import ArticleItem from '../ArticleItem';
import Button from '../common/Button';
import Col from '../common/Col';
import Container from '../common/Container';
import MainTitle from '../MainTitle';

export default function ArticlesList() {
  return (
    <div className="articles-list section">
      <Container>
        <MainTitle>Danh sách bài viết</MainTitle>

        {/* End Row News List */}
        <div className="tcl-row">
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
          <Col xs={12} md={6}>
            <ArticleItem isStyleCard isShowAvatar={false} />
          </Col>
        </div>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button size="large" variant="primary" loading>Tải thêm</Button>
        </div>
      </Container>
    </div>
  )
}