import React from 'react';
import { UserTypes } from '../../types';
import UserImg from '../../../../../assets/images/user-img.svg';

interface ProfileProps {
  user: UserTypes | undefined;
}

const Profile: React.SFC<ProfileProps> = props => {
  const { user } = props;
  return (
    <div className="default-paragraph">
      <img className="default-img" src={UserImg} alt="Profile" />
      <h1>{user ? user.name : ''}</h1>
      <span>{user ? user.address : ''}</span>
    </div>
  );
};

export default Profile;
