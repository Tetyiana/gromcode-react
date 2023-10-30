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
    return <Spinner size={50} />;
  } else if (this.state.isLogin) {
    return <Logout onLogin={true} onClick={this.handleLogout} />;
  } else {
    return <Login onLogout={true} onClick={this.handleLogin} />;
  }
}

}

export default Auth;

