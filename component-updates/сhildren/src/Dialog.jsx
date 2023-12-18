import React, { Component } from "react";
import PropTypes from "prop-types";

const Dialog = ({isOpen, children, title, onClouse})=> {
  if(!isOpen){
    return null;
  };
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button className="dialog__close-btn" onClick={onClouse}>+</button>
        </div>
        <div className="dialog__content">
          {children}
        </div>
      </div>
    )
  }
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClouse: PropTypes.func.isRequired, 
}
Dialog.defaultProps = {
  title: '',
  isOpen: false,
}
export default Dialog;

