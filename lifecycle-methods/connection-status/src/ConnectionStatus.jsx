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
      if (this.state.online === true) {
       return(<div className='status'>online</div>)
    } else {
       return (<div className='status_offline'>offline</div>);
 } 
  }
}

export default ConnectionStatus;

