import React, { Component } from 'react';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: props.start,
      currentTime: this.getTimeWithOffset(props.start),
    };

    setInterval(() => {
      this.setState({
        currentTime: this.getTimeWithOffset(this.state.timeZone),
      });
    }, 1000);
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
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.currentTime.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;

