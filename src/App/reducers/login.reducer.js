import { loginConstants } from '../constants/login.constants'
export default function login(state = {}, action){
  let loggedIn = localStorage.token ? true : false;
  switch(action.type){
    case loginConstants.LOGIN_REQUEST:
      let body=action.body;
      if(!loggedIn){
        fetch('/api/oauth/redirect',{
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json'
          }
        }).then((response)=>{
          return response.json();
        }).then((accessToken)=>{
          localStorage.setItem("token", accessToken)
        })
      }
      return {...state, loggedIn: loggedIn};
    case loginConstants.LOGIN_SUCCESS:
      return {...state};
    case loginConstants.LOGIN_FAILURE:
      return {...state};
    case loginConstants.LOGOUT:
      localStorage.removeItem("token");
      return {...state, loggedIn: false};
    default:
      return {...state};
  }
}