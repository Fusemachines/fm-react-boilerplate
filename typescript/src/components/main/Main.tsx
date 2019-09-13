import React from 'react';
import { RouteComponentProps } from 'react-router';

const Main: React.SFC<RouteComponentProps<{}>> = () => (
  <div className="default-wrapper">
    <div className="default-paragraph">
      <h1>Fuse React Boilerplate</h1>
      <span>This project is managed and update by Fusemachines Frontend Team</span>
    </div>
  </div>
);

export default Main;
