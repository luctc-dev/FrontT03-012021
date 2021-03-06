// Nhập môn về bất đồng bộ trong Javascript
// Code không chạy theo thứ tự như bình thường

var number = 20;
console.log('1. run', number);

setTimeout(
  function handle() {
    console.log('3. run')
  }
, 1000)

console.log('2. run');

// 1 -> 3 -> 2 : Phú, all
// Bug xảy ra khi nào??? Khi bộ não của mình suy nghĩ khác so với máy tính
// Callback Function - Event Loop, Callback Queue, 
// Song Song -> Không bao giờ xảy ra việc chạy song song trong Javascript

// Js là một ngôn ngữ lập trình đơn luồng (Single Thread)
// Trong một thời điểm chỉ chạy được 1 tác duy nhất
// Chạy đồng thời

// Nhưng Javascript sẽ được hỗ trợ bởi những môi trường xung quanh
// Browser
// NodeJs

// setTimeout -> Thực chất KHÔNG PHẢI LÀ CỦA Javascript
//     -> Sử dụng tính năng Timer từ trình duyệt
// Network -> Javascript cũng không tương tác ra ngoài network 
//     -> Sử dụng tính năng XHR của trình duyệt (XMLHTTPRequest)
//   -> WebAPIs
//  Sự kiện (click, tương tác với HTML, javascript DOM) -> Browser