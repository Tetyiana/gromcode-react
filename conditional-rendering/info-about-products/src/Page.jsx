import React, { Component } from "react";
import  Info  from "./Info.jsx";

const text1 = '';
const text2 = '';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }
  setText = text => {
    this.setState({
      text
    })
  };
  render() {
      return (
    <div className="page">
          <div className="text"><Info text={this.state.text} /></div>
  <div className="actions">
    <button className="btn" onClick={()=>{this.setText(text1)}} >IPhone 13</button>
    <button className="btn" onClick={()=>{this.setText(text2)}}>IPhone 13</button>
    <button className="btn" onClick={()=>{this.setText('')}}>Clear</button>
  </div>
    </div>
  )
  }

};

export default Page;