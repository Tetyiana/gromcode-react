import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { filterText, count, onChange } = this.props;

    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
          <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Filter;


