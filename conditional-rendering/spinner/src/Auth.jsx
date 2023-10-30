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
  if (this.state.showSpinner) {
    return <Spinner size={} />;
  } else if (this.state.isLogin) {
    return <Logout onClick={this.handleLogout} />;
  } else {
    return <Login onClick={this.handleLogin} />;
  }
}

}

export default Auth;

