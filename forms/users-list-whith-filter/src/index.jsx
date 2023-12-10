import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Filter from './Filter.jsx';

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<Filter users={users} />, rootElement);

