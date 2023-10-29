import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      showSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });

  
    setTimeout(() => {
      this.setState({
        isLogin: true,
        showSpinner: false,
      });
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  }

  render() {
    return (
        this.state.showSpinner && <Spinner size={30} /> ||
        this.state.isLogin && <Logout onClick={this.handleLogout} /> ||
        <Login onClick={this.handleLogin} />
    );
  }
}

export default Auth;

