import React, { lazy } from 'react';
import Icon from '../../components/atoms/Icon';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('../../components/pages/Main'))
  },
  {
    path: '/about',
    component: lazy(() => import('../../components/pages/About'))
  },
  {
    path: '/projects',
    component: lazy(() => import('../../components/pages/Projects'))
  }
];

export const links = [
  {
    exact: true,
    to: '/',
    children: (
      <>
        <Icon className="generic" name={'Home'} />
        Home
      </>
    )
  },
  {
    exact: true,
    to: '/about',
    children: (
      <>
        <Icon className="generic" name={'User'} />
        About
      </>
    )
  },
  {
    exact: true,
    to: '/projects',
    children: (
      <>
        <Icon className="generic" name={'Toolbox'} />
        Work
      </>
    )
  }
];
