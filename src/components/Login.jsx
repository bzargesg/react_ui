import React from 'react';
function Login(props){
  let body = {requestToken: window.location.search.slice(6)};
  console.log(props)
  if(body.requestToken && !props.loggedIn){
    props.login(body);
  }
  return(
    <a href="https://github.com/login/oauth/authorize?client_id=bd29131b5dddb07d4258&redirect_uri=http://localhost:8000">
        Login with github
      </a>
  )
}
export default Login;