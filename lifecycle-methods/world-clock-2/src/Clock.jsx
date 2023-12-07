import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      currentTime: this.getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      this.setState({
        currentTime: this.getTimeWithOffset(this.state.offset),
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
      // <div className="clock">
      //   <div className="clock__location">{this.props.location}</div>
      //   <div className="clock__time">{this.state.currentTime.toLocaleTimeString()}</div>
      // </div>
      <div className="clock">
  <div className="clock__location">
    {this.props.location}
  </div>
  <div className="clock__time">
    {moment(this.state.currentTime.toString()).format('h:mm:ss A')}
  </div>
</div>
    );
  }
}

export default Clock;

