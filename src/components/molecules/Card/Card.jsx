import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/components/atoms/Card.module.scss';

const Card = ({ imgUrl, title, ...props }) => {
  return (
    <Link {...props} className={styles['card-with-effect']}>
      <div className={styles['card-with-effect_imgWrapper']}>
        <img src={imgUrl} alt="images" />
      </div>
      <div
        className={styles['card-with-effect_details']}
        children={<h2>{title}</h2>}
      />
    </Link>
  );
};

export default Card;
