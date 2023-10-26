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
      
      <div className="toggler" onClick={this.toggleButton}>
        {this.state.active ? 'On' : 'Off'}
      </div>
    
    );
  }
}

export default Toggler;
