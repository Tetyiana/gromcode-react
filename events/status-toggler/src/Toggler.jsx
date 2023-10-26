import React, { Component } from "react"; 

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggler: 'Off',
    };
  }

  toggleButton = () => {
    const newButtonState = this.state.buttonToggler === 'Off' ? 'On' : 'Off';
    this.setState({
      buttonToggler: newButtonState,
    });
  }

  render() {
    return (
      <div className="toggler">
        <span className="counter__value" onClick={this.toggleButton}>
          {this.state.buttonToggler}
        </span>
      </div>
    );
  }
}

export default Toggler;
