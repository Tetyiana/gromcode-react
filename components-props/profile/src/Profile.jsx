import React from 'react';
import moment from 'moment';



const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;

  formatDate = moment(userData.birthDate).format('DD MMM YYYY');
  
  return (
    <div className="profile" >
      <div className="profile_name">
        {`${firstName} ${lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${formatDate} in ${birthPlace}`}
      </div>
    </div>
  );
}

export default Profile;
