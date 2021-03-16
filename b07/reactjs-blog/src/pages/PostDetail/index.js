import './post-detail.css';
import './related-posts.css';
import './comments.css';
import './post-author.css';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actFetchPostDetailAsync } from '../../store/posts/actions';
import Button from '../../components/common/Button';
import Col from '../../components/common/Col';
import Container from '../../components/common/Container';

function PostDetail() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loadingStatus, setLoadingStatus] = useState('loading'); // loading , success , error 

  const slug = params.slug;

  useEffect(() => {
    setLoadingStatus('loading');
    dispatch(
      actFetchPostDetailAsync({
        slug: slug
      })
    ).then(data => {
      if (data.ok) {
        setLoadingStatus('success');
      } else {
        setLoadingStatus('error');
      }
    })
  }, [slug, dispatch])

  if (loadingStatus === 'loading') {
    return (
      <Container>
        <h1>...Loading...</h1>
      </Container>
    );
  }

  if (loadingStatus === 'error') {
    return (
      <Container>
        <div className="tcl-row">
          <Col xs={2}></Col>
          <Col xs={4}>
            <img src="https://cdn.24h.com.vn//images/404img_092018.png" alt="" />
          </Col>
          <Col xs={4}>
            <h2>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h2>
            <Button onClick={() => {
              history.push('/')
            }}>Quay lại trang chủ</Button>
          </Col>
          <Col xs={2}></Col>
        </div>
      </Container>
    );
  }

  return (
    <main className="post-detail">
      <div className="spacing" />
      {/* Post Detail Head */}
      <div className="post-detail__head">
        <div className="tcl-container">
          <h1 className="post-detail__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
          <ul className="post-detail__info">
            <li className="item author">
              By <a href="/"><strong>John Smith</strong></a>
            </li>
            <li className="item date">
              May 15, 2021
        </li>
            <li className="item views">
              2 <i className="icons ion-ios-eye" />
            </li>
            <li className="item comments">
              20 <i className="icons ion-ios-chatbubble" />
            </li>
          </ul>
        </div>
      </div>
      {/* End Post Detail Head */}
      <div className="spacing" />
      {/* Post Detail Wrapper Content */}
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            {/* Post Detail Content */}
            <div className="post-detail__content">
              <div className="thumbnail">
                <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
              </div>
              <div className="content-padding">
                {/* Post Detail rich text editor */}
                <div className="rte">
                  <p>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
                  <h2>Emphasis</h2>
                  <p>Emphasis, aka <i>italics</i>, with asterisks or <u>underscores</u>.</p>
                  <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
                  <p>Strikethrough uses two tildes. <del>Scratch this</del>.</p>
                  <h2>Code and Syntax Highlighting</h2>
                  <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
                  <p>Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks — they’re easier and only they support syntax highlighting.</p>
                  <h2>Blockquote</h2>
                  <blockquote>
                    Blockquotes are very handy in email to emulate reply text.
                    This line is part of the same quote.
              </blockquote>
                  <h2>List</h2>
                  <ol>
                    <li>First ordered list item</li>
                    <li>Another list item
                  <ul>
                        <li>Unordered sub-list.</li>
                      </ul>
                    </li>
                    <li>Actual numbers don’t matter, just that it’s a number
                  <ol>
                        <li>Ordered sub-list</li>
                      </ol>
                    </li>
                  </ol>
                </div>
                {/* End Post Detail rich text editor */}
                {/* Post Detail Tags */}
                <div className="post-detail__tags">
                  <h2>Tags</h2>
                  <ul>
                    <li className="item"><a href="/" className="btn btn-default">HTML</a></li>
                    <li className="item"><a href="/" className="btn btn-default">CSS3</a></li>
                    <li className="item"><a href="/" className="btn btn-default">React</a></li>
                    <li className="item"><a href="/" className="btn btn-default">Vue</a></li>
                  </ul>
                </div>
                {/* End Post Detail Tags */}
                {/* Post Detail Comments */}
                <div className="post-detail__comments">
                  <div className="comments__form">
                    <div className="comments__form--control">
                      <div className="comments__section--avatar">
                        <a href="/">
                          <img src="/assets/images/avatar1.jpg" alt="" />
                        </a>
                      </div>
                      <textarea name="" defaultValue={""} />
                    </div>
                    <div className="text-right">
                      <button className="btn btn-default">Submit</button>
                    </div>
                  </div>
                  <p>20 Comments</p>
                  <ul className="comments">
                    {/* Comment 1 */}
                    <li className="item">
                      <div className="comments__section">
                        <div className="comments__section--avatar">
                          <a href="/">
                            <img src="/assets/images/avatar1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="comments__section--content">
                          <a href="/" className="comments__section--user">John Smith</a>
                          <p className="comments__section--time">2 minutes ago</p>
                          <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores, iusto unde quibusdam! Ullam nisi iste reprehenderit, expedita nam ad. Nisi hic at voluptate sint incidunt aut?</p>
                          {/* <i class="ion-reply comments__section--reply"></i> */}
                        </div>
                      </div>
                      {/* Reply Comments */}
                      <ul className="comments">
                        <li className="item">
                          <div className="comments__section">
                            <div className="comments__section--avatar">
                              <a href="/">
                                <img src="/assets/images/avatar3.jpg" alt="" />
                              </a>
                            </div>
                            <div className="comments__section--content">
                              <a href="/" className="comments__section--user">John Smith</a>
                              <p className="comments__section--time">2 minutes ago</p>
                              <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
                              {/* <i class="ion-reply comments__section--reply"></i> */}
                            </div>
                          </div>
                        </li>
                        <li className="item">
                          <div className="comments__section">
                            <div className="comments__section--avatar">
                              <a href="/">
                                <img src="/assets/images/avatar4.jpg" alt="" />
                              </a>
                            </div>
                            <div className="comments__section--content">
                              <a href="/" className="comments__section--user">John Smith</a>
                              <p className="comments__section--time">2 minutes ago</p>
                              <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem ma?</p>
                              {/* <i class="ion-reply comments__section--reply"></i> */}
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* Reply form */}
                      <div className="comments__form">
                        <div className="comments__form--control">
                          <div className="comments__section--avatar">
                            <a href="/">
                              <img src="/assets/images/avatar1.jpg" alt="" />
                            </a>
                          </div>
                          <textarea defaultValue={""} />
                        </div>
                        <div className="text-right">
                          <button className="btn btn-default">Submit</button>
                        </div>
                      </div>
                    </li>
                    {/* Comment 2 */}
                    <li className="item">
                      <div className="comments__section">
                        <div className="comments__section--avatar">
                          <a href="/">
                            <img src="/assets/images/avatar2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="comments__section--content">
                          <a href="/" className="comments__section--user">John Smith</a>
                          <p className="comments__section--time">2 minutes ago</p>
                          <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores?</p>
                          {/* <i class="ion-reply comments__section--reply"></i> */}
                        </div>
                      </div>
                      <div className="comments__hidden">
                        <a href="/"><i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời</a>
                      </div>
                    </li>
                    {/* Comment 3 */}
                    <li className="item">
                      <div className="comments__section">
                        <div className="comments__section--avatar">
                          <a href="/">
                            <img src="/assets/images/avatar3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="comments__section--content">
                          <a href="/" className="comments__section--user">John Smith</a>
                          <p className="comments__section--time">2 minutes ago</p>
                          <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
                          {/* <i class="ion-reply comments__section--reply"></i> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* End Post Detail Comments */}
              </div>
            </div>
            {/* End Post Detail Content */}
            {/* Post Detail Sidebar */}
            <div className="post-detail__side">
              <div className="post-author">
                <div className="post-author__bg-avatar">
                  <a href="/" className="post-author__avatar">
                    <img src="/assets/images/blog-detail.jpg" alt="" />
                  </a>
                </div>
                <div className="post-author__nickname">
                  <a href="/">John Smith</a>
                </div>
                <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
              </div>
              <div className="spacing" />
              <div className="related-post">
                <h2 className="related-post__head">Related Posts</h2>
                <article className="related-post__card">
                  <a href="/" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                  <div className="related-post__info">
                    <a className="related-post__author" href="/">John Smith</a>
                    <p className="related-post__date">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                        </path>
                      </svg>
                  1 min ago</p>
                  </div>
                </article>
                <article className="related-post__card">
                  <a href="/" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                  <div className="related-post__info">
                    <a className="related-post__author" href="/">John Smith</a>
                    <p className="related-post__date">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                        </path>
                      </svg>
                  1 min ago</p>
                  </div>
                </article>
                <article className="related-post__card">
                  <a href="/" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                  <div className="related-post__info">
                    <a className="related-post__author" href="/">John Smith</a>
                    <p className="related-post__date">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                        </path>
                      </svg>
                  1 min ago</p>
                  </div>
                </article>
              </div>
            </div>
            {/* End Post Detail Sidebar */}
          </div>
        </div>
      </div>
      {/* End Post Detail Wrapper Content */}
    </main>

  )
}

export default PostDetail;