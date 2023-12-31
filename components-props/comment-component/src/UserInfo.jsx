import React, { Component } from 'react';
import './userinfo.scss';
import UserAvatar from './Avatar';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <UserAvatar
        avatarUrl={props.user.avatarUrl}
        name={props.user.name}
      />
        {/* <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} /> */}
        <div className="user-info__name">{props.user.name}</div>
      </div>
  );
};
export default UserInfo;