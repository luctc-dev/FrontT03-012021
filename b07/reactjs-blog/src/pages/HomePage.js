import ArticlesList from '../components/ArticlesList';
import ArticlesLatest from '../components/ArticlesLatest';
import ArticlesPopular from '../components/ArticlesPopular';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  actFetchPostsAsync,
  actFetchLatestPostsAsync,
  actFetchPopularPostsAsync,
  actResetPosts
} from '../store/posts/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.App.lang);

  useEffect(() => {
    dispatch(actFetchPostsAsync({ lang }))
    dispatch(actFetchLatestPostsAsync({ lang }))
    dispatch(actFetchPopularPostsAsync({ lang }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    return () => {
      dispatch(actResetPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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