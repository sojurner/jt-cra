import React from 'react';
import styles from '../../../styles/components/atoms/Typography.module.scss';

const CustomTypography = ({ variant, ...props }) =>
  React.createElement(variant, { ...props });

const Typography = ({ variant, ...props }) => {
  props.className = styles[props.className];
  return <CustomTypography variant={variant} {...props} />;
};

export default Typography;
