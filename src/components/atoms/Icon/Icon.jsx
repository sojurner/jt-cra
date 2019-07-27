import React from 'react';
import iconList from '../../../assets/icons';
import styles from '../../../styles/components/atoms/Icon.module.scss';

const CustomJSX = ({ iconName }) => {
  console.log(iconName, iconList[iconName]);
  const iconProps = [...iconList[iconName]];
  const x = iconProps.slice(1);

  const children = x.map(element => {
    return React.createElement(element.type, { ...element.props }, null);
  });
  return React.createElement('svg', { ...iconProps[0].props }, children);
};

const SVGIcon = ({ span, name, className, ...props }) => {
  return !span ? (
    <button className={styles[className]} {...props}>
      <CustomJSX iconName={name} />
    </button>
  ) : (
    <span className={styles[className]} {...props}>
      <CustomJSX iconName={name} />
    </span>
  );
};

export default SVGIcon;
