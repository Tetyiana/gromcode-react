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
    if (this.state.isOnline === true) {
      return <div className='status'>online</div>;
    } else {
      return <div className='status_offline'>offline</div>;
    }
  }
}

export default ConnectionStatus;

  



