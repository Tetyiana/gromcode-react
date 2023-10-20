import React from 'react';
import moment from 'moment';

const Profile = (props) => {
  const { firstName, lastName, birthDate, birthPlace } = props;

  const birthDateMoment = moment(birthDate, 'DD MMM YY').format('DD MMM YY'); 

  return (
    <>
      <div className="profile_name">
        {`${firstName} ${lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${birthDateMoment} in ${birthPlace}`}
      </div>
    </>
  );
}

export default Profile;
