import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";


function App() {

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
            <h1>Trang Chủ</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
