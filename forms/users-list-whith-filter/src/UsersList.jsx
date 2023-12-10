import React, { Component } from "react";
import User from './User.jsx';

class UsersList extends Component {
  render() {
    const users = this.props.users || [];

    return (
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    );
  }
}

export default UsersList;

