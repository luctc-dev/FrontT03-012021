import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../store/auth/actions';
import { FlagFR, FlagUK, FlagVN, FlagZH } from '../common/AppIcon';
import MainMenus from './MainMenus';
import { actChangeLang } from '../../store/app/actions';

const mapFlagByLang = {
  vi: <FlagVN />,
  en: <FlagUK />,
  zh: <FlagZH />,
  fr: <FlagFR />,
}

export default function HeaderMenus() {
  const currentUser = useSelector(state => state.Auth.currentUser);
  const dispatch = useDispatch();
  const lang = useSelector(state => state.App.lang);

  function handleLogout(evt) {
    evt.preventDefault();
    dispatch(actLogout());
  }

  function handleChangeLang(newLang, evt) {
    evt.preventDefault();
    dispatch(actChangeLang(newLang))
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
          <li className="header-nav__lang">
            <a href="/" onClick={evt => evt.preventDefault()}>{mapFlagByLang[lang]}</a>
            <ul>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={(evt) => handleChangeLang('vi', evt)}><FlagVN /> Tiếng Việt</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={(evt) => handleChangeLang('en', evt)}><FlagUK /> English</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={(evt) => handleChangeLang('zh', evt)}><FlagZH /> 中文</a></li>
                <li><a href="/" className="d-flex tcl-ais-center" onClick={(evt) => handleChangeLang('fr', evt)}><FlagFR /> Français</a></li>
            </ul>
        </li>
        </ul>
        {/*  */}
      </div>
    </div>
  )
}