import './popular-news-list.css';
import MainTitle from '../MainTitle';
import ArticleItem from '../ArticleItem';
import Container from '../common/Container';

export default function ArticlesPopular() {
  return (
    <div className="popular-news section bg-white-blue">
      <Container>
        <MainTitle btnProps={{
          btnText: 'Xem Thêm',
          type: 'link',
          href: '/'
        }}>Bài viết phổ biến</MainTitle>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">

              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowDesc isShowCategoies />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isShowDesc isShowCategoies />  
              </div>

            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem isStyleCard isStyleRow isShowDesc isShowCategoies />
                {/* <article className="article-item style-card style-row">
                  <div className="article-item__thumbnail">
                    <Link to="#">
                      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
                    </Link>
                  </div>
                  <div className="article-item__content">
                    <ul className="article-item__stats">
                      <li>
                        <i className="icons ion-ios-eye" />
                        <span className="text">Views</span>
                      </li>
                    </ul>
                    <ul className="article-item__categories">
                      <li><Link to="#" className="btn btn-category">News</Link></li>
                      <li><Link to="#" className="btn btn-category">News</Link></li>
                    </ul>
                    <h2 className="article-item__title">
                      <Link to="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</Link>
                    </h2>
                    <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting
                    syntax. Its design allows it to…</p>
                    <div className="article-item__info">
                      <div className="article-item__author-image">
                        <Link aria-label="John Doe" to="/">
                          <img src="assets/images/john-doe.png" alt="john-doe" />
                        </Link>
                      </div>
                      <div className="article-item__info-right">
                        <div className="article-item__author-name">
                          <Link to="#"><strong>John Doe</strong></Link>
                        </div>
                        <div className="article-item__datetime">
                          <div className="date">June 02, 2020</div>
                          <div className="time">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                              </path>
                            </svg>
                          1 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article> */}
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}