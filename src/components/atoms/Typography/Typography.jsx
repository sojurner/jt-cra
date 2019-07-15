import React from 'react';
import styles from '../../../styles/components/atoms/Typography.module.scss';

const variantSelection = (content, props) => ({
  h1: <h1 {...props}>{content}</h1>,
  p: <p {...props}>{content}</p>
});

const Typography = ({ variant, children, ...props }) => {
  props.className = styles[props.className];
  return variantSelection(children, props)[variant];
};

export default Typography;
