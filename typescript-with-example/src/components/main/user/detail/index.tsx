import React from 'react';
import { RouteComponentProps } from 'react-router';
import Profile from './commons';
import { USERS } from '../../../../constants/testUser';

interface Params {
  id: string;
}

const UserDetail: React.SFC<RouteComponentProps<Params>> = props => {
  const { match } = props;

  const activeUser = USERS.find(data => `${data.id}` === match.params.id);

  return (
    <div className="default-wrapper">
      <Profile user={activeUser} />
    </div>
  );
};

export default UserDetail;
