import { UserService } from "../../services/user";

export const ACT_CHANGE_PASSWORD = 'ACT_CHANGE_PASSWORD'

export function actChangePassword({
  password,
  new_password,
  confirm_new_password
}) {
  return {
    type: ACT_CHANGE_PASSWORD,
    payload: {
      password,
      new_password,
      confirm_new_password
    }
  }
}

export function actChangePasswordAsync({
  password,
  new_password,
  confirm_new_password
}) {
  return async dispatch => {
    try {
      const response = await UserService.changePassword({
        password,
        new_password,
        confirm_new_password
      })
      console.log("response", response)
      return {
        ok: true
      }
    } catch(err) {
      const errRes = err.response
      const mapError = {
        default: 'Có lỗi xảy ra, vui lòng thử lại sau!',
        rest_user_invalid_password: 'Mật khẩu cũ không đúng',
        rest_user_invalid_new_password: 'Mật khẩu mới không được trùng với mật khẩu cũ',
      }

      if (errRes.data && errRes.data.code && mapError[errRes.data.code]) {
        return {
          ok: false,
          message: mapError[errRes.data.code]
        }
      }

      return {
        ok: false,
        message: mapError.default
      }
    }
  }
}