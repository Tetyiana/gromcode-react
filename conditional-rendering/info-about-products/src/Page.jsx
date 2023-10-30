import React, { Component } from "react";
import  Info  from "./Info.jsx";

const text1 = 'Price is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available in 1 color';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }
  setText = info => {
    this.setState({
      info
    })
  };
  render() {
      return (
    <div className="page">
          <div className="text"><Info info={this.state.text}/></div>
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