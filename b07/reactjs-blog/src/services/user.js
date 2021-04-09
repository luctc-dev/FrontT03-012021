import api from "./api"

export const UserService = {
  changePassword({
    password,
    new_password,
    confirm_new_password
  }) {
    return api.callWithToken().put('/wp/v2/users/password', {
      password,
      new_password,
      confirm_new_password
    })
  }
}