import React from "react";


const NamberList = ({ numbers }) => {
const numberElements =numbers.map(num => <li>{num}</li>);
const element = <ul>{numberElements}</ul>;
return element;
};

export default NamberList;