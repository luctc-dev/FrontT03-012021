// Tương tác với Network XHR

const response = fetch('http://learning-reactjs.xyz/wp-api/wp-jsonnnnnn/wp/v2/posts')
// const response = fetch('http://learning-reactjs.xyz')


/*
 setTimeout -> Làm 1 việc gửi sang WebAPIs, không làm bất kỳ việc gì trong Javascript

 fetch -> Làm 2 việc
    1. Tạo ra một object Promise và return trong Javascript 
    2. Gửi sang WebAPIs để tương tác với XHR
*/

console.log('1. run');
function thanhCong(value) {
  // const promiseJson = value.json();
  console.log(value)
  // promiseJson.then((data) => {
  //   console.log('Chuyển json thành công', data)
  // }, (err) => {
  //   console.log('Chuyển về json thất bại', err.message)
  // })
}

function thatBai(err) {
  console.log('thatBai', err.message)
}

response
  .then(thanhCong)
  .catch(() => {
    console.log('hello')
  })

console.log('2. run');


// Tương tác với network bên ngoài (Chờ)