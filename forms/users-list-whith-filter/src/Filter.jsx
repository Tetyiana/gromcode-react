import React, { Component } from "react";
import UsersList from './UsersList.jsx';

class Filter extends Component {
  state = {
    filterText: "", // Додайте початковий стан для тексту фільтру
  };

  handleFilterChange = event => {
    this.setState({
      filterText: event.target.value.toLowerCase(),
    });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const usersWithFilter = users.filter(({ name }) =>
      filterText && name.toLowerCase().includes(filterText.toLowerCase())
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
        <UsersList users={usersWithFilter} />
      </div>
    );
  }
}

export default Filter;




