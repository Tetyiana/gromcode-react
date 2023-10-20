import React from 'react';
import moment from 'moment';


const Profile = ({ userData }) => {
  return (
    <>
      <div className="profile_name">
        {`${userData.firstName} ${userData.lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${moment(userData.birthDate, 'DD MMM YY').format('DD MMM YY')} in ${userData.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;
