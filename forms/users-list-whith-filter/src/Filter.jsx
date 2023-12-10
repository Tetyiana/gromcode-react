import React, { Component } from "react";
import UsersList from "./UsersList.jsx";

class Filter extends Component {
  state = {
    filterText: "", // Додайте початковий стан для тексту фільтру
  };

  handleFilterChange = (event) => {
    const { onChange } = this.props;
    const filterText = event.target.value.toLowerCase();

    this.setState({
      filterText,
    });

    if (typeof onChange === "function") {
      onChange(filterText);
    }
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const usersWithFilter = users.filter(({ name }) =>
      filterText ? name.toLowerCase().includes(filterText) : true
    );

    return (
      <div>
        <div className="filter">
          <span className="filter__count">{usersWithFilter.length}</span>
          <input
            type="text"
            className="filter__input"
            value={filterText}
            onChange={this.handleFilterChange}
          />
        </div>
        <UsersList users={usersWithFilter} filterText={filterText} />
      </div>
    );
  }
}

export default Filter;




