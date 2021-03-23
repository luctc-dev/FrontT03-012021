import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MainMenus from './MainMenus';

export default function HeaderMenus() {
  const currentUser = useSelector(state => state.Auth.currentUser);

  return (
    <div className="tcl-col-6">
      <div className="header-nav">
        <MainMenus />
        <ul className="header-nav__lists">
          {
            !currentUser 
              ? <li className="user"><Link to="/login"><i className="icons ion-person" /> Tài khoản</Link></li>
              : <li className="user"><Link to="/dashboard"><i className="icons ion-person" /> {currentUser.nickname}</Link></li>
          }
        </ul>
      </div>
    </div>
  )
}