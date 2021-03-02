import { Link } from 'react-router-dom';

export default function HeaderMenus() {
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/">Our Team</Link>
            <ul>
              <li><Link to="/">Our Team 1</Link></li>
              <li><Link to="/">Our Team 2</Link></li>
              <li><Link to="/">Our Team 3</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/">Contact</Link>
            <ul>
              <li><Link to="/">Contact 1</Link></li>
              <li><Link to="/">Contact 2</Link></li>
              <li>
                <Link to="/">Contact 3</Link>
                <ul>
                  <li><Link to="/">Contact 11</Link></li>
                  <li><Link to="/">Contact 12</Link></li>
                  <li><Link to="/">Contact 13</Link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user"><Link to="login.html"><i className="icons ion-person" /> Tài khoản</Link></li>
        </ul>
      </div>
    </div>
  )
}