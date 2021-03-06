import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://learning-reactjs.xyz/wp-api/wp-json/'
});



// async function fetchPosts() {
//   const data = await instance.get('/wp/v2/posts', {
//     params: {
//       per_page: 5,
//       page: 1
//     }
//   });

//   console.log('3. Chờ dong trên chạy xong', data)
// }

const fetchPosts = async () => {
  const data = await instance.get('/wp/v2/posts', {
    params: {
      per_page: 5,
      page: 1
    }
  });

  console.log('3. Chờ dong trên chạy xong', data)
}

console.log('1. run');
const promiseTuAsync = fetchPosts();
console.log('2. run');