import React from 'react';
import { UserTypes } from '../../types';

interface ProfileProps {
  user: UserTypes | undefined;
}

const Profile: React.SFC<ProfileProps> = props => {
  const { user } = props;
  console.log('OK');
  return (
    <div className="default-paragraph">
      <h1>{user ? user.name : ''}</h1>
      <span>{user ? user.address : ''}</span>
    </div>
  );
};

export default Profile;
