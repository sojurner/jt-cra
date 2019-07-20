import React, { lazy } from 'react';
import Icon from '../../components/atoms/Icon';

export const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../../components/pages/Main'))
  },
  {
    exact: true,

    path: '/about',
    component: lazy(() => import('../../components/pages/About'))
  },
  {
    exact: true,

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
