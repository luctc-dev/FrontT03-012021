import { Link } from 'react-router-dom';
import MainMenus from './MainMenus';

export default function HeaderMenus() {
  return (
    <div className="tcl-col-6">
      <div className="header-nav">
        <MainMenus />
        <ul className="header-nav__lists">
          <li className="user"><Link to="login.html"><i className="icons ion-person" /> Tài khoản</Link></li>
        </ul>
      </div>
    </div>
  )
}