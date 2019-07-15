import React from 'react';
import { Route } from 'react-router-dom';

const Routes = ({ routes }) => {
  return routes.map((routeProps, index) => (
    <Route key={`route-${index}`} {...routeProps} />
  ));
};

export default Routes;
