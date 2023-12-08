import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus = () => {
    this.setState({
      isOnline: navigator.onLine,
    });
  };

  render() {
    return (
      <div className={this.state.isOnline ? 'status' : 'status status_offline'}>
        {this.state.isOnline ? 'online' : 'оffline'}
      </div>
    );
  }
}
export default ConnectionStatus;

  



