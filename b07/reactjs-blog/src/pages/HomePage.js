import ArticlesList from '../components/ArticlesList';
import ArticlesLatest from '../components/ArticlesLatest';
import ArticlesPopular from '../components/ArticlesPopular';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  actFetchPostsAsync,
  actFetchLatestPostsAsync,
  actFetchPopularPostsAsync
} from '../store/posts/actions';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchPostsAsync())
    dispatch(actFetchLatestPostsAsync())
    dispatch(actFetchPopularPostsAsync())
  }, [])

  return (
    <div>
      <ArticlesLatest />

      <ArticlesPopular />

      <ArticlesList />
    </div>

  )
}

// Tương tác với BackEnd từ Javascript 