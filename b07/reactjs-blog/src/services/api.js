import axios from 'axios';

const api = axios.create({
  baseURL: 'http://learning-reactjs.xyz/wp-api/wp-json',
});

export default api;