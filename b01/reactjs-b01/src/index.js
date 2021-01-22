// Module thư viện bên ngoài
import React from 'react';
import ReactDOM from 'react-dom';

// Những module mình tự xây dựng, tự viết
import './index.css';
import App from './App';

console.log("ReactDOM", ReactDOM);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Mã nguồn cũ. Đê dùng thư viện bên ngoài -> <script src="..." />
// Theo cú pháp cũ ES6 hỗ trợ của NodeJs -> Dùng từ khoá import để gắn một thư viện bên ngoài vào
// Khi đường dẫn không có './' phía đầu -> Tự động tìm trong node_modules
// Khi có './' tìm module đó ở trong thư mục hiện tại
// Khi lập trình -> Tự tách nhỏ Project của mình ra nhiều module riêng lẻ để quản lý
// Một file css cũng coi như là một module
// Một hình ảnh cũng coi như là một module
// Một file Javascript tất nhiên cũng là một module