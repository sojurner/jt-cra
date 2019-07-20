import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '../../atoms/Typography';
import LoadingWrapper from '../../wrappers/LoadingWrapper';

const NavMenu = ({ onClose, links }) => {
  return (
    <>
      <Typography variant={'h1'} children={'Menu'} />
      <nav>
        {links.map((linkProps, index) => (
          <LoadingWrapper>
            <NavLink
              activeStyle={{ borderLeft: '5px solid #7c5295' }}
              style={{ borderLeft: '3px solid rgba(0,0,0,0)' }}
              onClick={onClose}
              key={`navlink-${index}`}
              {...linkProps}
            />
          </LoadingWrapper>
        ))}
      </nav>
    </>
  );
};

export default NavMenu;
