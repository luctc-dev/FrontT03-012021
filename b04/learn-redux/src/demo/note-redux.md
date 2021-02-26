- Redux là một thư viện của Javascript (Nó không dính líu gì tới React cả)
- Redux có thể dùng 1 mình ở nơi khác (Không nhất thiết phải kết hợp với React)
- ... Redux với Javascript thuần ... 
- redux, react-redux
- react-redux (Thư viện giúp kết nối giữa react và redux lại với nhau)

- Store: Nơi lưu trữ dữ liệu (state)
- Action: Nơi nhận tín hiệu phát ra từ giao diện
    - Action chỉ đơn giản là một object mô tả những đặc tính của "action"
    - { type: 'PHÁ NHÀ', ... }
    - { type: 'ĐẾM', ... }
    - { type: 'ĐĂNG NHẬP', ... }
- Reducer: Nơi biến đổi dữ liệu (Biến đổi state)
    - Redux chỉ một pure function 
    - Function có hai tham số (state, action)
    - Function này sẽ nhận vào state hiện tại và action đang được kích hoạt -> Trả về state mới sau khi đã biến đổi

- UI -> kích hoạt action (Mình làm)
- Từ action gọi reducer và truyền tham số giúp mình (Redux làm)
- Thay đổi dữ liệu trong Reducer và trả về dữ liệu (Mình làm)
- Dữ liệu trả về từ Reducer sẽ được chuyển qua Store (Redux làm)
- Từ Store -> UI (React) thì cần phải có thư viện hỗ trợ là react-redux (Liên quan tới re-render lại khi data thay đổi)

```javascript
const initState = {
  todos: [],
  isShowForm: true
}
function reducer(state = initState, action) {
  
  // Bước tạo store mình sẽ return về state mặc định ban đầu
  // Cách 1: Kiểm tra action.type === '???'
  // Cách 2: Kiểm tra state. Nếu state là undefined -> Chưa khởi tạo dữ liệu
  // Cách 3: Dùng cú pháp ES6 để gán giá trị mặc định cho tham số khi nó là undefined

  if (action.type.indexOf('@@redux/INIT') !== -1) {
    return {
      todos: [],
      isShowForm: false
    }
  }

  if (state === undefined) {
    return {
      todos: [],
      isShowForm: false
    }
  }

  return state;
}
```

- Action Creator (Function tạo ra action)