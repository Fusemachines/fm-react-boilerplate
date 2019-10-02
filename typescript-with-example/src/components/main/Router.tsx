import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';

import { MAIN_ROUTE, USER_ROUTE } from '../../constants/routes';

import Main from './';
import UserRouter from './user/Router';

const MainRouter: React.SFC<RouteComponentProps<{}>> = () => (
  <Switch>
    <Route exact path={MAIN_ROUTE} component={Main} />
    <Route path={USER_ROUTE} component={UserRouter} />
  </Switch>
);

export default MainRouter;
