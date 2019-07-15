import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import styles from '../../../styles/layouts/Menu.module.scss';
import List from '../List';

const Menu = ({ initial, open, onClose, links }) => {
  return ReactDOM.createPortal(
    <aside
      className={
        initial
          ? styles.menuAsideInitial
          : open
          ? styles.menuAside
          : styles.menuAsideHide
      }
    >
      <Icon
        onClick={onClose}
        className={open ? 'rightChevron' : 'rightChevronClose'}
        name={'ChevronRightCircle'}
      />
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
      <List list={} />
    </aside>,
    document.querySelector('.App')
  );
};
export default Menu;
