import React, { Component } from "react";
import UserForm from "./UserForm.jsx";

const user = {
  name: 'Nik',
  student: 'true',
  occupation: 'London',
  about: 'I like to learn react',
}

class App extends Component {

  createUser = (userData) => {
    console.log(userData);
  };

  render() {
    return (
      <div>
        <UserForm createUser={this.createUser} />
      </div>
    );
  }
}

export default App;
