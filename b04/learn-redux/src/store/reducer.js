
const initState = {
  listBlogs: [
    {
      id: 20,
      title: 'ReactJs là gì?',
      thumbnail: 'https://fullstackstation.com/wp-content/uploads/2016/08/react-js-1024x576.png',
      shortDesc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 21,
      title: 'ReactJs là gì?',
      thumbnail: 'https://fullstackstation.com/wp-content/uploads/2016/08/react-js-1024x576.png',
      shortDesc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 22,
      title: 'ReactJs là gì?',
      thumbnail: 'https://fullstackstation.com/wp-content/uploads/2016/08/react-js-1024x576.png',
      shortDesc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  ],
  isShowForm: false
}

function rootReducer(state = initState, action) {
  console.log('rootReducer', action);
  return state;
}

export default rootReducer;