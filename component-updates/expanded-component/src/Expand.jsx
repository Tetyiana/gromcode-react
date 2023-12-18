import React, { Component } from "react";

class Expand extends Component {
    state = {
    isOpen: false,
  }


 handleClick = () => {
    this.setState((e) => ({
      isOpen: !e.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
   return (
    <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">Some title</span>
          <button className="expand__toggle-btn" onClick={this.handleClick}>
            <i className={`fas ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
          </button>
        </div>
          {isOpen && <div className="expand__content">{children}</div>}
    </div>
    )
}
   
}
  


export default Expand;

