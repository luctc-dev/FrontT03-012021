
export const ACT_CHANGE_LANG = 'ACT_CHANGE_LANG';

export function actChangeLang(lang) {
  return {
    type: 'ACT_CHANGE_LANG',
    payload: {
      lang
    }
  }
}