import React from 'react';
import iconList from '../../../assets/icons';
import styles from '../../../styles/components/atoms/Icon.module.scss';

const Icon = ({ className, name, ...rootProps }) => {
  const { svg, path } = iconList[name];
  return (
    <button className={styles[className]} {...rootProps}>
      <svg {...svg}>
        <path {...path} />
      </svg>
    </button>
  );
};

export default Icon;
