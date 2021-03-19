import api from './api';

export const MenusService = {
  getMenusBySlug: (slug = `main-menu-vi`) => api.call().get(`/menus/v1/menus/${slug}`)
}