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

const navigationItemClass = 'navigation_item';

export const links = [
  {
    exact: true,
    to: '/',
    children: (
      <>
        <Icon className={navigationItemClass} name={'Home'} />
        Home
      </>
    )
  },
  {
    exact: true,
    to: '/about',
    children: (
      <>
        <Icon className={navigationItemClass} name={'User'} />
        About
      </>
    )
  },
  {
    exact: true,
    to: '/projects',
    children: (
      <>
        <Icon className={navigationItemClass} name={'Toolbox'} />
        Work
      </>
    )
  }
];
