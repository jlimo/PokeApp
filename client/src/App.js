import React from 'react';
import "./App.css";
import { Register, Login } from "./components/";
import Search from "./pages/Search";

import { BrowserRouter as Router, Route, } from "react-router-dom";
import { Auth } from './modules';


function App() {

function handleRegisterSubmit(e) {
  e.preventDefault();
  console.log("hello", e)
  fetch('/register', {
    method: 'POST',
    body: JSON.stringify({
      user: {
        username: this.state.registerUserName,
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      }
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => {
    if (res.token) {
      Auth.authenticateToken(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }
  }).catch(err => {
    console.log(err);
  })
}

function handleLoginSubmit(e) {
  e.preventDefault();
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username: this.state.loginUserName,
      password: this.state.loginPassword,
    }),
    headers: {
     'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => {
    console.log(res);
    if (res.token) {
      Auth.authenticateToken(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUserName: '',
        loginPassword: '',
      })
    }
  }).catch(err => {
    console.log(err);
  })
}
function handleLogout(e) {
  e.preventDefault();
  fetch(`/logout`, {
      method: "GET",
  }).then((res) => {
      dispatchEvent({
          type: "logout",
      })
      // history.push("/login");
  });
};

  return (
    <Router>
      <Route path= "/">
        <Search />
    </Route>
      <Route exact path="/login">
      <Login />
      </Route>
      <Route exact path="/register">
      <Register />
      </Route>
  </Router>
  );
}

export default App;

 /* <Route exact path="/login"render={() => 
      <Login handleLoginSubmit={this.handleLoginSubmit}/>}/>
      handleLoginSubmit={this.handleLoginSubmit}
      <Route exact path="/register" render={() => 
      <Register handleRegisterSubmit={this.handleRegisterSubmit}/>} />
      handleRegisterSubmit={this.handleRegisterSubmit */