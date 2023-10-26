import React, { Component } from "react"; 

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggler: false,
    };
  }

 toggleButton = () => {
    this.setState({
      buttonToggler: !this.state.buttonToggler,
    });
  }

  render() {
    return (
      <div className="toggler">
        <span className="counter__value" onClick={this.toggleButton}>
          {this.state.buttonToggler ? 'On' : 'Off'}
        </span>
      </div>
    );
  }
}

export default Toggler;
