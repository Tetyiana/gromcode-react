import React, { Component } from "react"; 

const Coral = '#ff7f50';
const Aqua = '#00ffff';
const Bisque = '#FFE4C4';

class Colors extends Component {
   render() {
    return (
<div>
  <div className="picker__title">Red</div>
  <div>
    <button className="picker__button picker__button_coral"></button>
    <button className="picker__button picker__button_aqua"></button>
    <button className="picker__button picker__button_bisque"></button>
  </div>
</div>


      // <div className="colors">
      //   <button
      //     className="colors__button"
      //     style={{ background: RED, }}
      //     onClick={() => { this.setBodyColor(RED) }}
      //   ></button>
      //   <button
      //     className="colors__button"
      //     style={{ background: GREEN, }}
      //     onClick={() => { this.setBodyColor(GREEN) }}
      //   ></button>
      //   <button
      //     className="colors__button"
      //     style={{ background: BLUE, }}
      //     onClick={() => { this.setBodyColor(BLUE) }}
      //   ></button>
      // </div>
    )
  }
}

export default Colors;
