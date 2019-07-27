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

    path: '/timeline',
    component: lazy(() => import('../../components/pages/Timeline'))
  },
  {
    exact: true,

    path: '/projects',
    component: lazy(() => import('../../components/pages/Projects'))
  },
  {
    exact: true,

    path: '/about',
    component: lazy(() => import('../../components/pages/About'))
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
        About Me
      </>
    )
  },
  {
    exact: true,
    to: '/timeline',
    children: (
      <>
        <Icon className={navigationItemClass} name={'Time'} />
        Timeline
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
