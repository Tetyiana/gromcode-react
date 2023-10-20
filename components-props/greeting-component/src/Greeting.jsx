import React from 'react';
import moment from 'moment';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '29 05 1983' 
}

const birthDate = moment(user.birthDate, 'DD MM YYYY'); 

const currentDate = moment();

const age = (birthDate, currentDate) => {
  const years = currentDate.diff(birthDate, 'years')
  return years;
}

const Greeting = (props) => {
  const userAge = age(birthDate, currentDate);
  return (
    <div className="greeting">{`My name is ${user.firstName} ${user.lastName}. I am ${userAge} years old`}</div>
  );
}

export default Greeting;
