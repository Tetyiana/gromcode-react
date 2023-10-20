import React from 'react';
import moment from 'moment';


const Profile = (props) => {
  return (
    <>
      <div className="profile_name">
        {`${props.firstName} ${props.lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${moment(props.birthDate, 'DD MMM YY').format('DD MMM YY')} in ${props.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;
