import React from 'react';
import Base from '../../layouts/Base';
import RawTimeline from '../../organisms/RawTimeline';
import FancyTimeline from '../../organisms/FancyTimeline';
import Toggle, { ToggleSwitch } from '../../molecules/Toggle';
import Typography from '../../atoms/Typography';
import styles from './styles.module.scss';

const Timeline = () => {
  return (
    <Base>
      <ToggleSwitch>
        {({ toggled, handleToggle }) => (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 30
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 280,
                  justifyContent: 'space-evenly'
                }}
              >
                <Typography variant={'h1'}>Timeline</Typography>
                <Toggle
                  className={styles.toggle1}
                  children={
                    <div
                      className={
                        !toggled
                          ? `${styles.toggle1_inner} ${
                              styles.toggle1_inner_active
                            }`
                          : `${styles.toggle1_inner} ${
                              styles.toggle1_inner_inactive
                            }`
                      }
                    />
                  }
                  onClick={handleToggle}
                />
              </div>
            </div>
            {toggled ? (
              <RawTimeline className={'experienceEducationTimeline'} />
            ) : (
              <FancyTimeline />
            )}
          </>
        )}
      </ToggleSwitch>
    </Base>
  );
};

export default Timeline;
