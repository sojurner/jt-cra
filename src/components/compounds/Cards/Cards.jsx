import React from 'react';
import Card from '../../molecules/Card';

const Cards = ({ list }) => {
  return list.map((cardProps, index) => (
    <Card key={`card-${index}`} {...cardProps} />
  ));
};
export default Cards;
