// import React, { Component } from "react";
// import User from "./User.jsx"
// import Filter from "./Filter";

// class UsersList extends Component {
//     state = {
//     filterText: "",
//   };

//   handleFilterChange = (event) => {
//     const { onChange } = this.props;
//     const filterText = event.target.value.toLowerCase();

//     this.setState({
//       filterText,
//     });

//     };

//   render() {
//     const { users } = this.props;
//     const userMap = users.map((user) => (
//           <User key={user.id} name={user.name} age={user.age} />
//         ))
//     return (
//      <div>
//   <Filter />
//   <ul class="users">
//     <User />
//   </ul>
// </div>

//     );
//   }
// }

// export default UsersList;


import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter";

class UsersList extends Component {
  state = {
    filterText: "",
  };

  handleFilterChange = (filterText) => {
    this.setState({
      filterText,
    });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const usersWithFilter = users.filter(({ name }) =>
      filterText ? name.toLowerCase().includes(filterText) : true
    );

    const userMap = usersWithFilter.map((user) => (
      <User key={user.id} name={user.name} age={user.age} />
    ));

    return (
      <div>
        {/* Передача count, filterText та onChange до компоненти Filter */}
        <Filter
          count={usersWithFilter.length}
          filterText={filterText}
          onChange={this.handleFilterChange}
        />
        <ul className="users">{userMap}</ul>
      </div>
    );
  }
}

export default UsersList;
