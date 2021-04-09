import api from './api';

const cachedData = {};

export const MenusService = {
  getMenusBySlug: async (slug = `main-menu-vi`) => {
    const url = `/menus/v1/menus/${slug}`;

    if (cachedData[url]) {
      return cachedData[url];
    }

    const response = await api.call().get(url)
    cachedData[url] = response;
    return response
  }
}