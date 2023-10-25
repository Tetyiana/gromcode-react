import React, { Component } from "react"; 

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';
class Colors extends Component {
  setBodyColor = color => {
    document.body.style.background = color;
  }
  render() {
    return (
      <div className="counter">
        <button
          className="counter__button"
          style={{ background: RED, }}
          onClick={this.setBodyColor.bind(this, RED)}
        ></button>
        <button
          className="counter__button"
          style={{ background: GREEN, }}
          onClick={this.setBodyColor.bind(this, GREEN)}
        ></button>
        <button
          className="counter__button"
          style={{ background: BLUE, }}
          onClick={this.setBodyColor.bind(this, BLUE)}
        ></button>
      </div>
    )
  }
}

export default Colors;
