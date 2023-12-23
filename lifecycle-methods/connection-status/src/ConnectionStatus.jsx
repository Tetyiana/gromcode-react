
import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  handleOffline = () => {
    this.setState({ status: 'offline' });
  };

  handleOnline = () => {
    this.setState({ status: 'online' });
  };

  render() {
    const { status } = this.state;
    return <div className={`status${status === 'offline' ? ' status_offline' : ''}`}>{status}</div>;
  }
}

export default Status;  



