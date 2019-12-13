import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MAIN_ROUTE } from '../constants/routes';

import MainRouter from '../components/main';

let design: any;
if (process.env.NODE_ENV === 'development') {
  design = React.lazy(() => import('../components/design'));
}

const AppRouter: React.SFC<{}> = () => (
  <Switch>
    <Route path={MAIN_ROUTE} component={MainRouter} />

    <React.Suspense fallback="Loading...">
      {design && <Route path="/design" component={design} />}

      <Route path={MAIN_ROUTE} component={MainRouter} />
    </React.Suspense>
  </Switch>
);

export default AppRouter;
