import React from 'react';
import Base from '../../layouts/Base';
import Typography from '../../atoms/Typography';
import styles from '../../../styles/pages/About.module.scss';
import Contact from '../../compounds/Contact';
import { contactList } from '../../../assets/lists';
import RandomQuotes from '../../molecules/RandomQuotes';

const About = () => {
  return (
    <Base>
      <div className={styles.about__body}>
        <Typography variant={'h1'}>About Me</Typography>
        <aside class={styles['profile-card']}>
          <header>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}
            >
              <Typography variant="h1" children="John Tan" />
              <div
                style={{
                  width: 1,
                  borderLeft: '.5px solid rgba(19, 19, 19, 0.28)',
                  height: 50
                }}
              />
              <Typography
                children={'Self-proclaimed Data scientist'}
                variant="h2"
                style={{
                  width: 180
                }}
              />
            </div>
            <Contact
              enableTooltip={false}
              className={'about'}
              contacts={contactList}
            />
          </header>

          <div class={styles['profile-bio']}>
            <RandomQuotes />
          </div>
        </aside>
      </div>
    </Base>
  );
};

export default About;
