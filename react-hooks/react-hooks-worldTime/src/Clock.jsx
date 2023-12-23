import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ offset, location }) => {
  const [currentTime, setCurrentTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeWithOffset(offset));
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  function getTimeWithOffset(offset) {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    const adjustedTime = new Date(currentTime.setHours(currentTime.getUTCHours() + offset + utcOffset));
    return moment(adjustedTime).format(' H:MM:SS A');
  }

  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {currentTime}
      </div>
    </div>
  );
};
// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       offset: props.offset,
//       currentTime: this.getTimeWithOffset(props.offset),
//     }
//   }

//     componentDidMount() {
//       this.interval = setInterval(() => {
//         this.setState({
//           currentTime: this.getTimeWithOffset(this.state.offset),
//         });
//       }, 1000);
//   }
  
//     componentWillUnmount() {
//       clearInterval(this.interval)
//     }

//     getTimeWithOffset = (offset) => {
//       const currentTime = new Date();
//       const utcOffset = currentTime.getTimezoneOffset() / 60;
//       const adjustedTime = new Date(currentTime.setHours(currentTime.getUTCHours() + offset + utcOffset));
//       return adjustedTime;
//   };
  
//     render() {
//       return (
     
//         <div className="clock">
//           <div className="clock__location">
//             {this.props.location}
//           </div>
//           <div className="clock__time">
//             {this.state.currentTime.toLocaleTimeString()}
//           </div>
//         </div>
//       );
//     }
//   }

export default Clock;

