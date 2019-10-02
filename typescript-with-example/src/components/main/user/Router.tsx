import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import { USER_LIST_ROUTE, USER_DETAIL_ROUTE } from '../../../constants/routes';
import UserList from './list';
import UserDetail from './detail';

const UserRouter: React.SFC<RouteComponentProps<{}>> = () => (
  <Switch>
    <Route exact path={USER_LIST_ROUTE} component={UserList} />
    <Route path={USER_DETAIL_ROUTE} component={UserDetail} />
  </Switch>
);

export default UserRouter;
