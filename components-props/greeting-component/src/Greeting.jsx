import React from 'react';
import moment from 'moment';

const Greeting = (props) => {
  const { firstName, lastName, birthDate } = props;

  const birthDateMoment = moment(birthDate, 'DD MM YYYY'); 

  const currentDate = moment();
  const years = currentDate.diff(birthDateMoment, 'years'); 

  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I am ${years} years old`}
    </div>
  );
}

export default Greeting;
