import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ClickAwayListener = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div
      className={styles.genericClickAwayListener}
      onClick={onClose}
      id={'click-away-listener'}
    />,
    document.getElementById('root')
  );
};

export default ClickAwayListener;
