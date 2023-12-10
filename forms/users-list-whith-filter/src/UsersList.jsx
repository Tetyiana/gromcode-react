import React, { Component } from "react";
import User from "./User.jsx";

class UsersList extends Component {
  render() {
    const { users, filterText } = this.props;

    return (
      <ul className="users">
        {users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
        {filterText && users.length === 0 && (
          <p>No users found with the current filter.</p>
        )}
      </ul>
    );
  }
}

export default UsersList;


