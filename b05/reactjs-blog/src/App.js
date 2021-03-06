import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

// import './demo-async/01';
// import './demo-async/02';
// import './demo-async/03';
// import './demo-async/04';
import './demo-async/05';

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
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
