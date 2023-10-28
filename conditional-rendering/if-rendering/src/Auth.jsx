import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import LoginButton from "./Login.jsx";
import LogoutButton from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <LogoutButton onLogout={this.handleLogout} />
        ) : (
          <LoginButton onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
