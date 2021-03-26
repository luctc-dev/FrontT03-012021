import axios from 'axios';
import { TOKEN_KEY } from '../store/auth/reducer';

const baseURL = 'http://learning-reactjs.xyz/wp-api/wp-json';

const api = {
  call() {
    return axios.create({
      baseURL,
    });
  },
  callWithToken() {
    return axios.create({
      baseURL,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN_KEY)
      }
    });
  }
}

export default api;