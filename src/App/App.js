import React from 'react';
import store from './helpers/store';
import WelcomeContainer from './components/containers/WelcomeContainer'
import LoginContainer from './components/containers/LoginContainer'
import team from '../assets/images/team.svg'
import { Provider } from 'react-redux';
import '../assets/css/App.css';

function App(props) {
  
  return (
    <Provider store={store} >
      <div id="wrapper">
         {/* Header */}
        <header id="header" class="alt">
					<span className="logo"><img src={team} alt="team picture" /></span>
						<h1>Simplifi</h1>
				</header>
        {/* Nav Bar */}
        	{localStorage.token ? (<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Introduction</a></li>
							<li><a href="#list">Employees</a></li>
							<li><a href="#add">Add New Employees</a></li>
						</ul>
					</nav>) : <div></div>}
      <div id="main" className="App">
        {/* loginCheck bring welcome page or login*/}
      {localStorage.token ?  <WelcomeContainer /> : <LoginContainer />}
      </div>
      {/* footer portion */}
      <footer id="footer">
						<section>
							<h2>Fake Company Inc</h2>
							<dl class="alt">
								<dt>Address</dt>
								<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
								<dt>Phone</dt>
								<dd>(303) 123-4567</dd>
								<dt>Email</dt>
								<dd><a href="#">information@untitled.tld</a></dd>
							</dl>
						</section>
						<p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
						<div class="copyright">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
					</footer>
      </div>
    </Provider>
  );
}
/*
list all employees
add new employee
update employee
deactivate employee
show employee details
*/
export default App;
