import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.scss';

const carouselCard = 'carousel__card';
const orcidLink =
  'https://orcid.org/0000-0002-5346-2255?fbclid=IwAR38mPiXMmcgvHq-UjmdtTO62ewj5mqsvLXyNsbsg_TlJr8dcX2YcgSzgW0';
const dissertationLink = 'https://www.mdpi.com/2076-3921/7/3/37/htm';

const toInt = strInt => {
  return parseInt(strInt);
};

const Carousel = ({ list, handleActiveChange }) => {
  const [activeList, setActiveList] = React.useState(list);
  React.useEffect(() => {
    setActiveList(list);
    console.log('list change');
  }, [list]);

  const onSlideChanged = ({ slide }) => {
    const { start, end } = list[slide];
    handleActiveChange([toInt(start), toInt(end)]);
  };

  const handleInitialization = ({ slide }) => {
    const { start, end } = list[slide];
    handleActiveChange([toInt(start), toInt(end)]);
  };

  const openNewTab = link => {
    window.open(link, '_blank').focus();
  };

  return (
    <AliceCarousel
      onSlideChanged={onSlideChanged}
      onInitialized={handleInitialization}
      mouseDragEnabled
    >
      {activeList.map((item, index) => {
        return (
          <div
            onClick={
              item.title === 'Post-Doctoral Fellow' ||
              item.title === 'Graduate Student'
                ? openNewTab.bind(null, orcidLink)
                : item.title === 'PhD in Biochemistry'
                ? openNewTab.bind(null, dissertationLink)
                : null
            }
            className={
              item.title === 'Post-Doctoral Fellow' ||
              item.title === 'Graduate Student' ||
              item.title === 'PhD in Biochemistry'
                ? `${carouselCard} ${carouselCard}__withLink`
                : carouselCard
            }
            key={`carousel-${index}-alice`}
          >
            <header className={`${carouselCard}__header`}>
              <h2
                className={`${carouselCard}__header__title`}
                children={item.title}
              />
              <h3
                className={`${carouselCard}__header__location`}
                children={item.location}
              />
            </header>
            <p
              className={`${carouselCard}__description`}
              children={item.description}
            />
          </div>
        );
      })}
    </AliceCarousel>
  );
};

export default Carousel;
