import React from 'react';
import { timeline } from '../../../assets/lists/timeline';
import Carousel from '../../compounds/Carousel';
import styles from './styles.module.scss';
import Loading from '../../atoms/Loading';

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

const experience = 'experience';
const education = 'education';

const FancyTimeline = () => {
  const startRef = React.useRef();
  const endRef = React.useRef();
  const [activeYears, setActiveYears] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [activeTimeline, setActiveTimeline] = React.useState(experience);
  const [activeCoordinates, setActivePosition] = React.useState(null);
  React.useEffect(() => {
    if (startRef.current && endRef.current) {
      setActivePosition(
        getElementCoordinates(startRef.current, endRef.current)
      );
    } else {
      setActivePosition(null);
    }
  }, [activeYears]);

  const handleActiveChange = years => {
    setActiveYears(years);
  };

  const getElementCoordinates = (startNode, endNode) => {
    const endingX = endNode.getBoundingClientRect().x;
    const startingX = startNode.getBoundingClientRect().x;
    return { width: endingX - startingX, startingPosition: startingX };
  };

  const handleActiveTimelineChange = timeline => {
    if (timeline !== activeTimeline) {
      setLoading(true);
      setTimeout(() => {
        setActiveTimeline(timeline);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className={styles['toggle-timeline']}>
      <div className={styles['toggle-timeline_inner']}>
        {activeCoordinates && (
          <p
            style={{
              position: 'absolute',
              top: -17,
              left: activeCoordinates.startingPosition + 20,
              width: `${activeCoordinates.width}px`,
              borderBottom: '5px dashed white'
            }}
          />
        )}
        <div className={styles['toggle-timeline_hashes']}>
          {years.map((year, index) => {
            return (
              <div
                key={`year-ticks-${index}`}
                children={year}
                className={
                  activeYears.includes(year)
                    ? `${styles[`toggle-timeline_inner_${year}`]} ${
                        styles[
                          `toggle-timeline_inner_${year}_active-${activeYears.indexOf(
                            year
                          )}`
                        ]
                      }`
                    : styles[`toggle-timeline_inner_${year}`]
                }
                ref={
                  activeYears.includes(year)
                    ? !activeYears.indexOf(year)
                      ? startRef
                      : endRef
                    : null
                }
              />
            );
          })}
        </div>
      </div>
      <section className={styles['toggle-timeline_buttons']}>
        <button
          children={experience}
          onClick={handleActiveTimelineChange.bind(null, experience)}
        />
        <button
          children={education}
          onClick={handleActiveTimelineChange.bind(null, education)}
        />
      </section>
      {loading ? (
        <Loading />
      ) : (
        <Carousel
          handleActiveChange={handleActiveChange}
          list={timeline[activeTimeline]}
        />
      )}
    </div>
  );
};

export default FancyTimeline;
