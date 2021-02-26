import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actAddNewPost } from '../store/actions';

const noImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177de92ccb3%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177de92ccb3%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.65%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

export default function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    shortDesc: '',
    thumbnail: '',
  })
  const [formError, setFormError] = useState({
    title: 'init',
    shortDesc: 'init',
    thumbnail: 'init'
  })

  function checkIsValid() {
    // Hợp lệ khi không có bất kỳ thằng nào có lỗi
    // Tất cả đều là rỗng
    if (formError.title === '' && formError.shortDesc === '' && formError.thumbnail === '') {
      return true;
    }
    return false;
  }

  function onChange(evt) {
    const key = evt.target.getAttribute('nameattr');
    const newFormData = {
      ...formData,
      [key]: evt.target.value
    }
    handleError(key, newFormData);
    setFormData(newFormData)
  }
  
  function handleError(key, newFormData) {
    
    const objStr = {
      title: 'Tiêu đề không được rỗng!',
      thumbnail: 'Hình ảnh đại diện là bắt buộc',
      shortDesc: 'Mô tả ngắn không được ngắn quá'
    }

    if (newFormData[key].length === 0) {
      setFormError({
        ...formError,
        [key]: objStr[key]
      })
      return;
    } 

    if (key === 'thumbnail') {
      if (newFormData.thumbnail.indexOf('http') === -1) {
        setFormError({
          ...formError,
          thumbnail: 'Đường dẫn không hợp lệ!'
        })
        return;
      }
    }

    setFormError({
      ...formError,
      [key]: ''
    })
    // if (key === 'title') {
    //   if (newFormData.title.length === 0) {
    //     setFormData
    //   }
    // }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    
    const isValid = checkIsValid();

    if (!isValid) {
      alert('Dữ liệu không hợp lệ!');
      return;
    }

    const post = {
      id: parseInt(Math.random() * 9999),
      ...formData,
    }
    const action = actAddNewPost(post)

    dispatch(action);

    // Tạo xong bài viết -> Xoá thông tin bài viết cũ trong form đi
    setFormData({
      title: '',
      thumbnail: '',
      shortDesc: ''
    })
    
  }

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-6 ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tiêu đề bài viết</label>
              <input 
                type="text"
                nameattr="title"
                className="form-control" 
                value={formData.title}
                onChange={onChange}
              />
              {
                formError.title !== '' && 
                formError.title !== 'init' && 
                <small className="form-text text-danger">{formError.title}</small>
              }
            </div>
            
            <div className="row">
              <div className="col-8">
                <div className="form-group">
                  <label>Hình ảnh đại diện</label>
                  <input 
                    type="text"
                    nameattr="thumbnail"
                    className="form-control" 
                    placeholder="http://..." 
                    value={formData.thumbnail}
                    onChange={onChange}
                  />
                  {
                   formError.thumbnail !== '' && 
                   formError.thumbnail !== 'init' && 
                   <small className="form-text text-danger">{formError.thumbnail}</small>
                  }
                </div>
                <div className="form-group">
                  <textarea 
                    type="text" 
                    className="form-control" 
                    placeholder="Mô tả ngắn" 
                    value={formData.shortDesc}
                    nameattr="shortDesc"
                    onChange={onChange}
                  />
                  {
                    formError.shortDesc !== '' && 
                    formError.shortDesc !== 'init' && 
                    <small className="form-text text-danger">{formError.shortDesc}</small>
                  }
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label style={{ color: 'transparent' }}>|</label>
                  <img src={formData.thumbnail || noImage} alt="..." className="img-thumbnail"></img>
                </div>
              </div>
            </div>
            
            <div className="form-group"> 
              <button className="btn btn-primary" type="submit">Tạo mới</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}