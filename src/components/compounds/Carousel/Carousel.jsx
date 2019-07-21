import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = ({ list }) => {
  const handleOnDragStart = e => e.preventDefault();

  return (
    <AliceCarousel mouseDragEnabled>
      {list.map((item, rootIndex) => {
        const content = Object.keys(item).map((key, index) => {
          return <h3 key={`fasdfasd-${index}`} children={item[key]} />;
        });
        return <div key={`adfasd-${rootIndex}`}>{content}</div>;
      })}
    </AliceCarousel>
  );
};

export default Carousel;
