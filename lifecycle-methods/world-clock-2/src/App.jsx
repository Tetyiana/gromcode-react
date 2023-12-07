import React, { Component } from 'react';
import Clock from "./Clock";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  

  toggle () {
    this.setState({
      visible: !this.state.visible,
    });

  };

  render() {
    return (
    <div className="clock">
      <button onClick={this.toggle}>Togle</button>
        <div>{this.state.visible && <Clock location={'NEW YORK'} offset={-5} />}</div> 
        <div>{this.state.visible && <Clock location={'Kyiv'} offset={2} />}</div> 
      <div>{this.state.visible && <Clock location={'London'} offset={0} />}</div>    
    </div>
    )
   
     
  }

};

export default App;