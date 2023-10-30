import React from "react";

const User = ({ name, age }) => {
  return (
    <li key={name} className='user'>
          <span>{name}</span>
          <span className='user__age'>{age}</span>
        </li>
  )
}
export default User;