import React, { useState } from 'react';
import Navigation from '../../compounds/Navigation';
import Typography from '../../atoms/Typography';
import { links } from '../../../assets/router';
import styles from '../../../styles/layouts/Header.module.scss';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className={styles.navHeader}>
      <Typography variant={'h1'} children={'John Tan'} />
      <Navigation drawerProps={{ drawerOpen, setDrawerOpen }} links={links} />
    </header>
  );
};

export default Header;
