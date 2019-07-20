import React from 'react';
import Card from '../../molecules/Card';
import LoadingWrapper from '../../wrappers/LoadingWrapper';

const Cards = ({ list }) => {
  return list.map((cardProps, index) => (
    <LoadingWrapper>
      <Card key={`card-${index}`} {...cardProps} />
    </LoadingWrapper>
  ));
};
export default Cards;
