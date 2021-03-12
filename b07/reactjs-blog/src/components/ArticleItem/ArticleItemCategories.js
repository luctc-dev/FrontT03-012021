import { Link } from 'react-router-dom';

export default function ArticleItemCategories({ categoriesId }) {

  /*
    1. Dùng useSelector lấy hashCategories ra 
    2. map thằng categoriesId
      2.1. Ứng với mỗi vòng lặp có id của category (key)
      2.2. hashCategories[id] -> lấy được thông tin của category
      2.3 hashCategories[id].name, hashCategories[id].slug render ra giao diện

        <li><Link to="fe" className="btn btn-category">{ name }</Link></li>

        -> Biến đổi to thành một dạng link hợp lệ

        <li><Link to="/category/fe" className="btn btn-category">{ name }</Link></li>

        -> Tạo ra một trang mới hiển thị những bài viết thuộc category nào đó? 
  */

  return (
    <ul className="article-item__categories">
      <li><Link to="/" className="btn btn-category">News</Link></li>
      <li><Link to="/" className="btn btn-category">News</Link></li>
    </ul>
  )
}