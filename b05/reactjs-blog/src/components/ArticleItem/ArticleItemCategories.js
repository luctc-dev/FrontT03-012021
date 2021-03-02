import { Link } from 'react-router-dom';

export default function ArticleItemCategories() {
  return (
    <ul className="article-item__categories">
      <li><Link to="/" className="btn btn-category">News</Link></li>
      <li><Link to="/" className="btn btn-category">News</Link></li>
    </ul>
  )
}