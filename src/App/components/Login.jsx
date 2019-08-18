import React from 'react';
function Login(props){
  let body = {requestToken: window.location.search.slice(6)};
  console.log(props)
  if(body.requestToken && !props.loggedIn){
    props.login(body);
  }
  return(

     <section id="intro" className="main special">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Welcome to Simplifi Employee Managment Software</h2>
          </header>
          <p>Please Login Below.</p>
        </div>
      </div>
      <footer className="major">
        <button><a href="https://github.com/login/oauth/authorize?client_id=bd29131b5dddb07d4258&redirect_uri=http://localhost:8000/">
        Login with github
      </a></button>
      </footer>
    </section>
      

    
  )
}
export default Login;