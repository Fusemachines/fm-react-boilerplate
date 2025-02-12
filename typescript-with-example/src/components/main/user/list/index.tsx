import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { USERS } from '../../../../constants/testUser';
import { UserTypes } from '../types';
import ProfileImg from '../commons/ProfileImg';

const UserList: React.SFC<RouteComponentProps<{}>> = () => {
  const userList = USERS.map((user: UserTypes, index: number) => {
    return (
      <li key={index}>
        <ProfileImg />
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </li>
    );
  });

  return (
    <div className="default-wrapper">
      <ul>{userList}</ul>
    </div>
  );
};

export default UserList;
