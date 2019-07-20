import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Navigation from '../../compounds/Navigation';
import Typography from '../../atoms/Typography';
import { links } from '../../../assets/router';
import styles from '../../../styles/layouts/Header.module.scss';

const Header = ({ history }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inverted, setInverted] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollPosition);

    return () => window.removeEventListener('scroll', scrollPosition);
  }, []);

  const scrollPosition = event => {
    const yAxis =
      event.scrollY ||
      event.scrollTop ||
      document.getElementsByTagName('html')[0].scrollTop;

    yAxis > 170 ? setInverted(true) : setInverted(false);
  };

  return (
    <header
      className={
        history.location.pathname === '/'
          ? inverted
            ? styles.navHeaderInverted
            : styles.navHeader
          : styles.navHeaderInverted
      }
    >
      <Typography variant={'h1'} children={'John Tan'} />
      <Navigation
        inverted={inverted}
        drawerProps={{ drawerOpen, setDrawerOpen }}
        links={links}
      />
    </header>
  );
};

const RoutedHeader = withRouter(Header);

export default RoutedHeader;
