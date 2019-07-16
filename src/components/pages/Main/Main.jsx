import React from 'react';
import Base from '../../layouts/Base';
import Profile from '../../compounds/Profile';
import Timeline from '../../organisms/Timeline';

const Main = () => (
  <Base>
    <Profile className={'figureProfile'} />
    <Timeline className={'experienceEducationTimeline'} />
  </Base>
);

export default Main;
