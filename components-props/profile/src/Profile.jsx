import React from 'react';
import moment from 'moment';
// const userData = {
//   firstName: 'James',
//   lastName: 'Bond',
//   birthDate: '1991-01-17',
//   birthPlace: 'London',
// };

const Profile = (props) => {
  return (
    <>
      <div className="profile_name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="profile_birth">
        {`Was born ${moment(props.userData.birthDate, 'DD MMM YY').format('DD MMM YY')} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;
