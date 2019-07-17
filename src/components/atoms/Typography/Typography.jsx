import React from 'react';
import styles from '../../../styles/components/atoms/Typography.module.scss';

const variantSelection = (content, props) => ({
  h1: <h1 {...props}>{content}</h1>,
  p: <p {...props}>{content}</p>,
  h2: <h2 {...props}>{content}</h2>,
  h3: <h3 {...props}>{content}</h3>,
  h4: <h4 {...props}>{content}</h4>,
  h5: <h5 {...props}>{content}</h5>,
  h6: <h6 {...props}>{content}</h6>
});

const Typography = ({ variant, children, ...props }) => {
  props.className = styles[props.className];
  return variantSelection(children, props)[variant];
};

export default Typography;
