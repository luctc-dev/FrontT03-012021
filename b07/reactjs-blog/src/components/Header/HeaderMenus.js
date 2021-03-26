import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../store/auth/actions';
import MainMenus from './MainMenus';

export default function HeaderMenus() {
  const currentUser = useSelector(state => state.Auth.currentUser);
  const dispatch = useDispatch();

  function handleLogout(evt) {
    evt.preventDefault();
    dispatch(actLogout());
  }

  return (
    <div className="tcl-col-6">
      <div className="header-nav">
        <MainMenus />
        <ul className="header-nav__lists">
          {
            !currentUser 
              ? <li className="user"><Link to="/login"><i className="icons ion-person" /> Tài khoản</Link></li>
              : (
                <li className="user">
                  <Link to="/dashboard"><i className="icons ion-person" /> {currentUser.nickname}</Link>
                  <ul>
                    <li>
                      <a href="/" onClick={handleLogout}>Dang xuat</a>
                    </li>
                  </ul>
                </li>
              )
          }
        </ul>
      </div>
    </div>
  )
}