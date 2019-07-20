import React from 'react';
import Base from '../../layouts/Base';
import Timeline from '../../organisms/Timeline';
import Toggle, { ToggleSwitch } from '../../molecules/Toggle';

const About = () => {
  return (
    <Base>
      <ToggleSwitch>
        {({ toggled, handleToggle }) =>
          console.log(toggled) || (
            <>
              <Toggle
                style={{
                  border: '1px solid black',
                  borderRadius: 50,
                  position: 'relative',
                  height: 20,
                  width: 80,
                  margin: 10
                }}
                children={
                  <div
                    style={{
                      position: 'absolute',
                      borderRadius: '50%',
                      background: 'black',
                      height: 20,
                      width: 20,
                      top: 0,
                      left: toggled ? 0 : '100%',
                      margin: '0 0 0 -10px'
                    }}
                  />
                }
                onClick={handleToggle}
              />
              {/* {toggled ? */}
              <Timeline className={'experienceEducationTimeline'} />
              {/* :
          } */}
            </>
          )
        }
      </ToggleSwitch>
    </Base>
  );
};

export default About;
