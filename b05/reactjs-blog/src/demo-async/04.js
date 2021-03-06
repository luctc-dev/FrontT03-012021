import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://learning-reactjs.xyz/wp-api/wp-json/'
});

const ps = instance.get('/wp/v2/posts', {
  params: {
    per_page: 5,
    page: 1
  }
})

ps
  .then((data) => {
    console.log(data)
  })
  .catch(err => {
    console.log(err.message);
  })