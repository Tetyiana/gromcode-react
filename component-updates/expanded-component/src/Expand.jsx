import React from "react";
import PropTypes from "prop-types";

const Expand = ({ isOpen, children, title, onClose }) => {

    return (
    <div className="expand border">
        <div className="expand__header">
          {isOpen && <span className="expand__title">{title}</span>}
          <button className="expand__toggle-btn" onClick={onClose}>
            <i className={`fas ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
          </button>
        </div>
          {isOpen && <div className="expand__content">{children}</div>}
    </div>
    )
}
  
Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired, 
}
Expand.defaultProps = {
  title: '',
  isOpen: false,
}
export default Expand;

