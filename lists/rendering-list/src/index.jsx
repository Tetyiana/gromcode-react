import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NambersList from "./NambersList.jsx";


const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];



ReactDOM.render(<NambersList numbers={ numbers } />, rootElement);
