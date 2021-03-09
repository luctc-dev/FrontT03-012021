import { Link } from 'react-router-dom';

export default function ArticleItemTitle({ title }) {
  return (
    <h2 className="article-item__title">
      <Link to="/only-someone-who's-seen-the-mummy-will-pass-this/">{title}</Link>
    </h2>
  )
}