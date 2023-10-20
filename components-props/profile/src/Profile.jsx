import React from 'react';
import moment from 'moment';



const Profile = ({ userData }) => {


  userData.birthDate = moment(userData.birthDate).format('DD MMM YYYY');
  
  return (
    <>
      <div className="profile_name">
        {`${userData.firstName} ${userData.lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${userData.birthDate} in ${userData.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;
