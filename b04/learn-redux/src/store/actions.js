import { ACT_ADD_NEW_POST } from './actionsType';

// Action Creator
export function actAddNewPost(post) {
  return {
    type: ACT_ADD_NEW_POST, // Action Type
    payload: {
      post
    }
  }
}