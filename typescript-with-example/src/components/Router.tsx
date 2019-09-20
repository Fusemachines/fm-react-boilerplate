import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { MAIN_ROUTE } from '../constants/routes';

import MainRouter from '../components/main/Router';
import AsyncRoute from './commons/AsyncRoute';

const AppRouter: React.SFC<{}> = () => (
  <Switch>
    {process.env.NODE_ENV === 'development' && (
      <Route
        path="/design"
        component={(props: RouteComponentProps<{}>) => (
          <AsyncRoute defaultProps={props} loadModulePromise={import(`../components/design`)} />
        )}
      />
    )}
    <Route path={MAIN_ROUTE} component={MainRouter} />
  </Switch>
);

export default AppRouter;
