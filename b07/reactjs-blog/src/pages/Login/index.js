import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { actLoginAsync } from '../../store/auth/actions';
import './login.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "congluc1902",
    password: "123123"
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    
    dispatch(
      actLoginAsync(formData)
    ).then(res => {
      if (res.ok) {
        history.push('/');
      } else {
        // Thông báo lỗi.
      }
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <form onSubmit={handleSubmit}>
                <Input 
                  type="text"
                  value={formData.username}
                  labelText="Tên đăng nhập"
                  placeholder="Nhập Username"
                  onChange={(evt) => {
                    setFormData({
                      ...formData,
                      username: evt.target.value
                    })
                  }}
                />
                <Input 
                  type="password"
                  value={formData.password}
                  labelText="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  onChange={(evt) => {
                    setFormData({
                      ...formData,
                      password: evt.target.value
                    })
                  }}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button size="large" variant="primary">Đăng nhập</Button>
                  <a href="register.html">Regiter</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}