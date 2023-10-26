import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorText: '', 
    };
  }


  handleMouseOver = (color) => {
    this.setState({
      colorText: color,
    });
  }

  handleMouseOut = () => {
    this.setState({
      colorText: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorText}</div>
        <div>
          <button className="picker__button picker__button_coral" onMouseOver={() => this.handleMouseOver('Coral')} onMouseOut={this.handleMouseOut}></button>
          <button className="picker__button picker__button_aqua" onMouseOver={() => this.handleMouseOver('Aqua')} onMouseOut={this.handleMouseOut}></button>
          <button className="picker__button picker__button_bisque" onMouseOver={() => this.handleMouseOver('Bisque')} onMouseOut={this.handleMouseOut}></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;


