import React from 'react';
import styles from '../../../styles/layouts/Buffer.module.scss';

const Buffer = ({ className, ...props }) => {
  return <div className={styles[className]} {...props} />;
};

export default Buffer;
