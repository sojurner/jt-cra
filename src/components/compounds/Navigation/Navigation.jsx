import React from 'react';
import Icon from '../../atoms/Icon';
import Menu from '../../molecules/Menu';
import ClickAwayListener from '../../atoms/ClickAwayListener';

const Navigation = ({ drawerProps, links }) => {
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
      <Icon onClick={toggleDrawer} className={'generic'} name={'Menu'} />
    </>
  );
};

export default Navigation;
