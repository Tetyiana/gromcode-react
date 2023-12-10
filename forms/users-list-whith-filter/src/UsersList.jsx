import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter";

class UsersList extends Component {
  state = {
    filterText: "",
  };

  handleFilterChange = (event) => {
    // const { onChange } = this.props;
    const filterText = event.target.value.toLowerCase();
    this.setState({ filterText });
  
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const usersToDisplay = users.filter(({ name }) =>
      filterText ? name.toLowerCase().includes(filterText) : true
    );

    return (
      <div>
        <Filter
          count={usersToDisplay.length}
          filterText={filterText}
          onChange={this.handleFilterChange}
        />
        <ul className="users">
            {usersToDisplay.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
