import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile';
import moment from 'moment';
const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17',
  birthPlace: 'London',
};


const rootElement = document.querySelector('#root');

ReactDOM.render(<Profile userData={userData} />, rootElement);
