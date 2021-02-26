import { useSelector } from 'react-redux';

export default function List() {

  const list = useSelector(state => state.listBlogs);
  
  // const todos = useSelector(
  //   function(state) {
  //     return state.todos
  //   }
  // )

  return (
    <div className="py-5">
      <div className="row">
        {
        list.map(blogItem => {
          return (
            <div className="col-4" key={blogItem.id}>
              <div className="card">
                <img className="card-img-top" src={blogItem.thumbnail} alt={blogItem.title} />
                <div className="card-body">
                  <h5 className="card-title">{blogItem.title}</h5>
                  <p className="card-text">{blogItem.shortDesc}</p>
                  <a href="https://www.google.com/search?q=reactjs+la+gi" className="btn btn-primary">Xem thêm</a>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}