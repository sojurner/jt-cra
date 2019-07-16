import React from 'react';
import styles from '../../../styles/components/organisms/Timeline.module.scss';
import Experience from '../../molecules/Experience';
import Education from '../../molecules/Education';

import { timeline } from '../../../assets/lists/timeline';

const Timeline = ({ className }) => {
  return (
    <section className={styles[className]}>
      <Experience
        className={styles.experienceRoot}
        list={timeline.experience}
      />

      <Education className={styles.educationRoot} list={timeline.education} />
    </section>
  );
};

export default Timeline;
