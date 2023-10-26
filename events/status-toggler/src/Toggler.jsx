import React, { Component } from "react"; 

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

 toggleButton = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div className="toggler">
        <span className="counter__value" onClick={this.toggleButton}>
          {this.state.active ? 'On' : 'Off'}
        </span>
      </div>
    );
  }
}

export default Toggler;
