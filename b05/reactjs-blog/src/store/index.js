import { createStore, combineReducers } from 'redux';

import authReducer from './auth/reducer';
import postsReducer from './posts/reducer';

const rootReducers = combineReducers({
  Auth: authReducer,
  Posts: postsReducer
})

const store = createStore(rootReducers);

export default store;