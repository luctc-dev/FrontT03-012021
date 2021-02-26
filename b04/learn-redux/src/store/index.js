import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)

// function useDispatch() {
//   return store.dispatch;
// }

store.subscribe(function() {
  console.log('Store thay đổi', store.getState())
})

export default store;