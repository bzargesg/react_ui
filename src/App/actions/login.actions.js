import { loginConstants } from '../constants/login.constants'
export const loginActions = {
 login,
 logout
}
function login(body) {
  return {type: loginConstants.LOGIN_REQUEST,body}
}
function logout(employee) {
  return {
    type: loginConstants.LOGOUT
  }
}