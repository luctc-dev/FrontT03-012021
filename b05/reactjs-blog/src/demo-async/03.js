// Tự tạo promise


function fetchPosts() {
  return new Promise(function(done, reject) {
    setTimeout(() => {
      
      done([
        {
          id: 20,
          name: 'Coding'
        },
        {
          id: 30,
          name: 'Coding 2'
        }
      ])

      // reject({
      //   message: 'Gọi data bị lỗi'
      // })

    }, 500);
  })
}


const response = fetchPosts();

response
  .then((value) => {
    console.log('thành công', value)
  })
  .catch((err) => {
    console.log('thất bại', err)
  })

// Giả lập một API khi chưa có sẵn hệ thống Back End