import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  if (!post) {
    return null;
  }

  const title = post.title.rendered;
  const categoriesId = post.categories;
  const slugLink = `/post/${post.slug}`;

  const thumbnail = post.featured_media_url;

  const authorId = post.author;
  const authorName = post.author_data.nickname;
  const authorAvatar = post.author_data.avatar;
  const authorLink = `/user/${post.author}`;

  const created = post.date;

  const shortDesc = post.excerpt.rendered
  const viewCount = post.view_count;

  return (
    <article className={classes}>
      <ArticleItemThumb 
        title={title}
        slugLink={slugLink}
        thumbnail={thumbnail}
      />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} /> }
        { isShowCategoies && <ArticleItemStats viewCount={viewCount} /> }

        <ArticleItemTitle title={title} slugLink={slugLink} />

        { isShowDesc && <ArticleItemDesc shortDesc={shortDesc} /> }

        <ArticleItemInfo 
          isShowAvatar={isShowAvatar} 
          created={created}
          authorId={authorId}
          authorName={authorName}
          authorLink={authorLink}
          authorAvatar={authorAvatar}
        />
      </div>
    </article>
  )
}