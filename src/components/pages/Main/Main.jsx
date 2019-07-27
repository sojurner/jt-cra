import React from 'react';
import Base from '../../layouts/Base';
import Profile from '../../compounds/Profile';
import Buffer from '../../wrappers/Buffer';
import Cards from '../../compounds/Cards';
import list from '../../../assets/lists/categoryList';

const Main = () => (
  <Base>
    <Profile className={'figureProfile'} />
    <Buffer className={'cardWrapper'}>
      <Cards list={list} />
    </Buffer>
  </Base>
);

export default Main;
