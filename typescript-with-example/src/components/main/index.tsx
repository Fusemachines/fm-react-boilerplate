import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const Main: React.SFC<RouteComponentProps<{}>> = () => (
  <div className="default-wrapper">
    <div className="default-paragraph">
      <h1>
        <Link to="/user">React + Typescript</Link>
      </h1>
      <span>This project is managed and update by Fusemachines Frontend Team.</span>
    </div>
  </div>
);

export default Main;
