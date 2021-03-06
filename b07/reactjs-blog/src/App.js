import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import PostDetail from './pages/PostDetail';
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { actFetchCategoriesAsync } from './store/categories/actions';
import { actFetchMainMenusAsync } from "./store/menus/actions";
import { actFetchMeInfoAsync } from "./store/auth/actions";

import { i18n } from '@lingui/core'
import { messages as messagesVi } from './locales/vi/messages'
import { messages as messagesEn } from './locales/en/messages';
import { messages as messagesFr } from './locales/fr/messages';

const message = {
  vi: messagesVi,
  en: messagesEn,
  fr: messagesFr
}

function App() {
  const dispatch = useDispatch();
  const isDashboard = useRouteMatch('/dashboard');
  const lang = useSelector(state => state.App.lang);

  useEffect(() => {
    dispatch(actFetchCategoriesAsync(lang));
    dispatch(actFetchMainMenusAsync(lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    dispatch(actFetchMeInfoAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    i18n.load(lang, message[lang])
    i18n.activate(lang)
  }, [lang])

  return (
    <main>
      <div className="wrapper-content">
        { !isDashboard && <Header /> }
        
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

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

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing"></div>
        { !isDashboard && <Footer /> }
      </div>
    </main>
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