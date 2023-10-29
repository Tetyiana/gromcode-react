import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });

  
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        showSpinner: false,
      });
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  renderContent() {
    if (this.state.showSpinner) {
      return <Spinner size={30} />;
    } else if (this.state.isLoggedIn) {
      return <Logout onClick={this.handleLogout} />;
    } else {
      return <Login onClick={this.handleLogin} />;
    }
  }

  render() {
    return (
      <div >
        {this.renderContent()}
      </div>
    );
  }
}

export default Auth;
