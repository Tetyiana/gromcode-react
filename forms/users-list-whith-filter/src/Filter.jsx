// import React, { Component } from "react";


// class Filter extends Component {
//   render() {
//     const { users } = this.props;
//     const { filterText } = this.state;

//     const usersWithFilter = users.filter(({ name }) => {
//       if (filterText) {
//         return name.toLowerCase().includes(filterText);
//       }
//       return (
//         <Filter
//           count={usersWithFilter.length}
//           onChange={this.handleFilterChange}
//           filterText={filterText}
//         />
//       )
//     });
//   }
// }

// export default Filter;
import React, { Component } from "react";

class Filter extends Component {
  state = {
    filterText: "",
  };

  handleFilterChange = (event) => {
    const { onChange } = this.props;
    const filterText = event.target.value.toLowerCase();

    this.setState({
      filterText,
    });

 
      this.props.onChange(filterText);
    
  };

  render() {
    const { count, filterText } = this.props;

    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default Filter;



