import { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useDispatch } from 'react-redux';
import { actFetchCategoriesAsync } from './store/categories/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCategoriesAsync())
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        
        <Switch>
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
