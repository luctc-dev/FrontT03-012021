import { MenusService } from "../../services/menus"

export const ACT_SET_MAIN_MENUS = 'ACT_SET_MAIN_MENUS';

export const actSetMainMenus = ({ menus }) => {
  return {
    type: ACT_SET_MAIN_MENUS,
    payload: { menus }
  }
}

function handleMap(menuItem) {
  const child_items = menuItem.child_items || [];
  // let child_items = [];

  // if (menuItem.child_items !== undefined) {
  //   child_items = menuItem.child_items
  // }

  const data = {
    id: menuItem.ID,
    title: menuItem.title,
    url: menuItem.url,
    child_items: child_items.map(handleMap)
  }

  return data;
}

export const actFetchMainMenusAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await MenusService.getMenusBySlug();
      const menus = response.data.items; // Dữ liệu thô - Raw data

      const newMenus = menus.map(handleMap); // Dữ liệu đã xử lý

      dispatch(actSetMainMenus({ menus: newMenus }));

    } catch(e) { }
  }
}

// const newMenus = menus.map(menuItem => {
//   const child_items = menuItem.child_items || [];
//   const data = {
//     id: menuItem.ID,
//     title: menuItem.title,
//     url: menuItem.url,
//     child_items: child_items.map(menuItemItem => {
      
//       const child_items_items = menuItemItem.child_items || [];
//       const dataData = {
//         id: menuItemItem.ID,
//         title: menuItemItem.title,
//         url: menuItemItem.url,
//         child_items: child_items_items.map(menuItemItemItem => {
//           const child_items_items_items = menuItemItemItem.child_items || [];
//           const dataDataData = {
//             id: menuItemItemItem.ID,
//             title: menuItemItemItem.title,
//             url: menuItemItemItem.url,
//             child_items: child_items_items_items
//           }

//           return dataDataData;
//         })
//       }

//       return dataData;
//     })
//   }

//   return data;
// })