import { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import PostDetail from './pages/PostDetail';
import { useDispatch } from 'react-redux';
import { actFetchCategoriesAsync } from './store/categories/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* /search?q=ffuwfhwu -> query string -> mặc định trình duyệt hỗ trợ rồi */}

          <Route path="/post/:slug">
            <PostDetail />
          </Route>

          <Route path="/login">
            <h1>Trang Đăng nhập</h1>
          </Route>

          <Route path="/register">
            <h1>Trang Đăng ký</h1>
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


/*
Trong Server có tổng 10 bài viết (total_element = 10)
Mỗi lần gọi API lấy 3 bài (per_page = 3)
Khi F5 lại trang lần đầu tiên (page = 1) -> 3 bài

  -> Có tổng cộng bao nhiêu page cần phải lấy thêm?

Nhấn nút load more -> page = page + 1 = 2 -> Gọi API dispatch action -> 3 bài -> Tổng cộng 6 bài, lưu trong reducer

Nhấn nút load more -> page = page + 1 = 3 -> Gọi API dispatch action -> 3 bài -> Tổng cộng 9 bài

Nhấn nút load more -> page = page + 1 = 4 -> Gọi API dispatch action -> 1 bài -> Tổng cộng 10 bài

-> So sánh với total_element -> Nếu đạt đủ số lượng rồi -> Ẩn nút load more

*/