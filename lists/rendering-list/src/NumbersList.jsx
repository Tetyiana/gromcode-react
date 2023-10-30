import React from "react";


const NumbersList = ({ numbers }) => {
const numberElements =numbers.map(num => <li>{num}</li>);
const element = <ul>{numberElements}</ul>;
return element;
};

export default NumbersList;