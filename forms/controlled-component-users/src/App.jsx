import React, { Component } from "react";
import UserForm from "./UserForm.jsx";

// const userData = {
//   name: 'Nik',
//   student: 'true',
//   occupation: 'London',
//   about: 'I like to learn react',
// }

class App extends Component {

  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return  (
      <div>
        <UserForm onSubmit={this.createUser} />
      </div>
    );
  }
}

export default App;
