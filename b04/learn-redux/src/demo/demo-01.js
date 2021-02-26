// Redux là một thư viện của Javascript (Nó không dính líu gì tới React cả)
// Redux có thể dùng 1 mình ở nơi khác (Không nhất thiết phải kết hợp với React)
// ... Redux với Javascript thuần ... 
// redux, react-redux
// react-redux (Thư viện giúp kết nối giữa react và redux lại với nhau)

// Store: Nơi lưu trữ dữ liệu (state)
// Action: Nơi nhận tín hiệu phát ra từ giao diện
//    - Action chỉ đơn giản là một object mô tả những đặc tính của "action"
//    - { type: 'PHÁ NHÀ', ... }
//    - { type: 'ĐẾM', ... }
//    - { type: 'ĐĂNG NHẬP', ... }
// Reducer: Nơi biến đổi dữ liệu (Biến đổi state)
//    - Redux chỉ một pure function 
//    - Function có hai tham số (state, action)
//    - Function này sẽ nhận vào state hiện tại và action đang được kích hoạt -> Trả về state mới sau khi đã biến đổi

// UI -> kích hoạt action (Mình làm)
// Từ action gọi reducer và truyền tham số giúp mình (Redux làm)
// Thay đổi dữ liệu trong Reducer và trả về dữ liệu (Mình làm)
// Dữ liệu trả về từ Reducer sẽ được chuyển qua Store (Redux làm)
// Từ Store -> UI (React) thì cần phải có thư viện hỗ trợ là react-redux (Liên quan tới re-render lại khi data thay đổi)

import { createStore } from 'redux'

const initState = {
  todos: [],
  isShowForm: true
}

function reducer(state = initState, action) {
  
  if (action.type === 'ACT_ADD_NEW_TASK') {
    return {
      ...state, // Copy lại toàn bộ data cũ của state
      todos: [ // Ghi đè lại todos để thay đổi nó
        ...state.todos, // Copy lại toàn bộ data cũ của state.todos
        action.data
      ]
    }
    // const arr = state.todos
    // arr.push(action.data);
    // return {
    //   todos: arr,
    //   isShowForm: state.isShowForm
    // }
  }

  return state;
}

const store = createStore(reducer)


store.subscribe(() => {
  console.log('state', store.getState())
})


// Action creator
function actAddNewTask(data) {
  return {
    type: 'ACT_ADD_NEW_TASK',
    data
  }
}

const action1 = actAddNewTask({
  id: 20,
  name: 'Đi chợ',
  level: 0
})

store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)

