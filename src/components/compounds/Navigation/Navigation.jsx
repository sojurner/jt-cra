import React from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '../../atoms/Icon';
import Menu from '../../molecules/Menu';
import ClickAwayListener from '../../atoms/ClickAwayListener';

const Navigation = ({ inverted, drawerProps, links, history }) => {
  const [initial, setInitial] = React.useState(true);

  const { drawerOpen, setDrawerOpen } = drawerProps;

  const toggleDrawer = () => {
    if (initial) setInitial(false);
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Menu
        initial={initial}
        open={drawerOpen}
        onClose={toggleDrawer}
        links={links}
      />
      {drawerOpen && <ClickAwayListener onClose={toggleDrawer} />}
      <Icon
        onClick={toggleDrawer}
        className={
          history.location.pathname === '/'
            ? inverted
              ? 'icon__menu-inverted'
              : 'icon__menu'
            : 'icon__menu-inverted'
        }
        name={'Menu'}
      />
    </>
  );
};

export default withRouter(Navigation);
