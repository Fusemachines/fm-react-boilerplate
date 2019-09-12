import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';

import { MAIN_ROUTE } from '../../constants/routes';

import Main from './Main';

const MainRouter: React.SFC<RouteComponentProps<{}>> = () => (
  <Switch>
    <Route path={MAIN_ROUTE} component={Main} />
  </Switch>
);

export default MainRouter;
