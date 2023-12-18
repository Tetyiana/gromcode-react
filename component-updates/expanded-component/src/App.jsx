import React, { Component } from "react";
import Expand from "./Expand.jsx";


class App extends Component {
  state = {
    isOpen: false,
  }


 handleClick = () => {
    this.setState((e) => ({
      isOpen: !e.isOpen,
    }));
  };


  render() {
       return (
   
    <div className="app">
            <Expand isOpen={this.state.isOpen} onClose={this.handleClick} title="Some title" >
              <p>
                Hooks are a new addition in React 16.8. They let you use state and other React features
                without writing a class.
              </p>
            </Expand>
    </div>
  )
}
}
export default App;