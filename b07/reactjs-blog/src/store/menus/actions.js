import { MenusService } from "../../services/menus"

export const ACT_SET_MAIN_MENUS = 'ACT_SET_MAIN_MENUS';

export const actSetMainMenus = ({ menus }) => {
  return {
    type: ACT_SET_MAIN_MENUS,
    payload: { menus }
  }
}


export const actFetchMainMenusAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await MenusService.getMenusBySlug();
      

    } catch(e) { }
  }
}