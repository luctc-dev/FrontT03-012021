import './latest-news-list.css';
import ArticleItem from '../ArticleItem';
import MainTitle from '../MainTitle';
import { useSelector } from 'react-redux';
import { Trans } from '@lingui/macro';

export default function ArticlesLatest() {
  const name = 'Lực';
  const posts = useSelector(state => state.Posts.articlesLatest);
  
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle><Trans>Bài viết mới nhất</Trans></MainTitle>
        <MainTitle><Trans>Chào buổi sáng, {name}</Trans></MainTitle>

        <div className="latest-news__list spacing">
          
          {
            posts.map(post => (
              <div className="latest-news__card" key={post.id}>
                <ArticleItem post={post} />
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}