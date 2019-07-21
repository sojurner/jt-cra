import React from 'react';
import { timeline } from '../../../assets/lists/timeline';
import Carousel from '../../compounds/Carousel';
import styles from './styles.module.scss';

const years = [
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019
];

const ToggleTimeline = () => {
  const [activeYears, setActiveYear] = React.useState([]);
  const [activeTimeline, setActiveTimeline] = React.useState('experience');

  return (
    <div className={styles['toggle-timeline']}>
      <div className={styles['toggle-timeline_inner']}>
        <div className={styles['toggle-timeline_hashes']}>
          {years.map((year, index) => {
            return (
              <div
                children={year}
                className={
                  activeYears.includes(year)
                    ? `${styles[`toggle-timeline_inner_${year}`]} ${
                        styles[`toggle-timeline_inner_${year}_active`]
                      }`
                    : styles[`toggle-timeline_inner_${year}`]
                }
              />
            );
          })}
        </div>
      </div>
      <section className={styles['toggle-timeline_buttons']}>
        <button onClick={() => setActiveTimeline('education')}>
          Education
        </button>
        <button onClick={() => setActiveTimeline('experience')}>
          Experience
        </button>
      </section>
      <Carousel list={timeline[activeTimeline]} />
    </div>
  );
};

export default ToggleTimeline;
