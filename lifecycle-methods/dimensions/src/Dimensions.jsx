import React, { Component } from "react";

class Dimensions extends Component {
  this.state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    window.addEventListener('resize', this.onResize);
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height} `;
  };

  render() {
    return (
      <div className="dimensions">
        {`${this.state.width} x ${this.state.height}`}
      </div>
    );
  }
}

export default Dimensions;
