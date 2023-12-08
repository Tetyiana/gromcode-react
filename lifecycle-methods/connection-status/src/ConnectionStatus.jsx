import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    online: navigator.onLine,
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
      online: navigator.onLine,
    });
  };

  render() {
    const statusClassName = this.state.online ? 'status' : 'status status_offline';
 

    return (
      <div className={statusClassName}>
        {this.state.online ? 'online' : 'offline'}
      </div>
    );
  }
}

export default ConnectionStatus;

