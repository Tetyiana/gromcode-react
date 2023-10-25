import React, { Component } from "react"; 

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = (color) => {
    document.body.style.background = color;
  }
  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ background: RED, }}
          onClick={() => { this.setBodyColor(RED) }}
        ></button>
        <button
          className="colors__button"
          style={{ background: GREEN, }}
          onClick={() => { this.setBodyColor(GREEN) }}
        ></button>
        <button
          className="colors__button"
          style={{ background: BLUE, }}
          onClick={() => { this.setBodyColor(BLUE) }}
        ></button>
      </div>
    )
  }
}

export default Colors;
