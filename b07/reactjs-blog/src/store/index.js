import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import authReducer from './auth/reducer';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';
import menusReducer from './menus/reducer';
import commentsReducer from './comments/reducer';

const rootReducers = combineReducers({
  Auth: authReducer,
  Posts: postsReducer,
  Categories: categoriesReducer,
  Menus: menusReducer,
  Comments: commentsReducer
})

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducers, middleware);

export default store;

// Action Đồng bộ -> Dispatch -> Gọi thẳng vào Reducer để thay đổi state
//    -> Là Object { type: '??' }

// Action Bất đồng bộ -> Dispatch -> KHÔNG thẳng vào Reducer
/*
  - Phải có ít nhất 2 action để xử lý tác vụ bất đồng bộ bằng Redux
  - Action bất đồng bộ -> Gọi API 
  - Sau khi gọi API xong -> dùng data trả về để dispatch tiếp một action đồng bộ
*/