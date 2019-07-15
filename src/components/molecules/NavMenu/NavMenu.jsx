import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '../../atoms/Typography';

const NavMenu = ({ onClose, links }) => {
  return (
    <>
      <Typography variant={'h1'} children={'Menu'} />
      <nav>
        {links.map((linkProps, index) => (
          <NavLink
            activeStyle={{ borderLeft: '5px solid #7c5295' }}
            style={{ borderLeft: '3px solid rgba(0,0,0,0)' }}
            onClick={onClose}
            key={`navlink-${index}`}
            {...linkProps}
          />
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
