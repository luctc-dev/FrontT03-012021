import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function handleMapComponent(menuItem) {
  return (
    <li key={menuItem.id}>
      {
        menuItem.url.indexOf('/') === 0 
          ? <Link to={menuItem.url}>{menuItem.title}</Link>
          : <a href={menuItem.url} target="_blank" rel="noreferrer">{menuItem.title}</a>
      }
      {
        menuItem.child_items.length !== 0 && (
          <ul>
            {
              menuItem.child_items.map(handleMapComponent)
            }
          </ul>
        )
      }
    </li>
  )
}

export default function MainMenus() {
  const listMenus = useSelector(state => state.Menus.mainMenus);
  console.log(listMenus);
  return (
    <ul className="header-nav__lists">
      { listMenus.map(handleMapComponent) }
    </ul>
  )
}