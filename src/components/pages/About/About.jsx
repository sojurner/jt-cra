import React from 'react';
import Base from '../../layouts/Base';
import Timeline from '../../organisms/Timeline';
import Toggle, { ToggleSwitch } from '../../molecules/Toggle';
import Typography from '../../atoms/Typography';
import ToggleTimeline from '../../organisms/ToggleTimeline';
import styles from './styles.module.scss';

const About = () => {
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
              <Timeline className={'experienceEducationTimeline'} />
            ) : (
              <ToggleTimeline />
            )}
          </>
        )}
      </ToggleSwitch>
    </Base>
  );
};

export default About;
