import { Link } from 'react-router-dom';

export default function ArticleItemThumb() {
  return (
    <div className="article-item__thumbnail">
      <Link to="/">
        <img src="/assets/images/blog-1.jpg" alt="/assets/images/blog-1.jpg" />
      </Link>
    </div>
  )
}