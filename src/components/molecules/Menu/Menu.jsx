import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../atoms/Icon';
import styles from '../../../styles/layouts/Menu.module.scss';
import NavMenu from '../NavMenu';
import Contact from '../../compounds/Contact';

import { contactList } from '../../../assets/lists';

const Menu = ({ initial, open, onClose, links }) => {
  const className = initial
    ? styles.menuAsideInitial
    : open
    ? styles.menuAside
    : styles.menuAsideHide;

  return ReactDOM.createPortal(
    <aside className={className}>
      <Icon
        onClick={onClose}
        className={open ? 'rightChevron' : 'rightChevronClose'}
        name={'ChevronRightCircle'}
      />
      <NavMenu onClose={onClose} links={links} />
      <Contact enableTooltip={true} className={'menu'} contacts={contactList} />
    </aside>,
    document.querySelector('.App')
  );
};
export default Menu;
