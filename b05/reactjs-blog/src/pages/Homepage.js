import ArticlesList from '../components/ArticlesList';
import ArticlesLatest from '../components/ArticlesLatest';
import ArticlesPopular from '../components/ArticlesPopular';

export default function HomePage() {
  return (
    <div>
      <ArticlesLatest />

      <ArticlesPopular />

      <ArticlesList />
    </div>

  )
}