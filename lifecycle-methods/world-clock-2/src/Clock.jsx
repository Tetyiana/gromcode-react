import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      currentTime: this.getTimeWithOffset(props.offset),
    }
  }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          currentTime: this.getTimeWithOffset(this.state.offset),
        });
      }, 1000);
  }
  
    componentWillUnmount() {
      clearInterval(this.interval)
    }

    getTimeWithOffset = (offset) => {
      const currentTime = new Date();
      const utcOffset = currentTime.getTimezoneOffset() / 60;
      const adjustedTime = new Date(currentTime.setHours(currentTime.getUTCHours() + offset + utcOffset));
      return adjustedTime;
  };
  
    render() {
      return (
     
        <div className="clock">
          <div className="clock__location">
            {this.props.location}
          </div>
          <div className="clock__time">
            {this.state.currentTime.toLocaleTimeString()}
          </div>
        </div>
      );
    }
  }

export default Clock;

