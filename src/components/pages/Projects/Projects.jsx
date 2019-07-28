import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import Base from '../../layouts/Base';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';

import styles from '../../../styles/pages/Projects.module.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import projectList from '../../../assets/lists/projectList';

const icons = [
  {
    span: true,
    name: 'Adjust'
  },
  {
    span: true,
    name: 'Link'
  },
  {
    span: true,
    name: 'Collections'
  },
  {
    span: true,
    name: 'Category'
  }
];

const rootClass = 'projectsBody';

const CarouselState = ({ children }) => {
  const [hoveredProject, setHoveredProject] = React.useState('');

  const handleHover = (event, project) => {
    event.stopPropagation();
    event.preventDefault();
    setHoveredProject(project);
  };

  const renderProps = () => ({ hoveredProject, handleHover });
  return children(renderProps());
};

const Projects = () => {
  console.log(styles[`${rootClass}__carousel`]);
  return (
    <Base>
      <div className={styles[rootClass]}>
        <Typography variant={'h1'} children={'Projects'} />
        <div className={styles[`${rootClass}__iconGroup`]}>
          {icons.map(iconProps => (
            <Icon
              {...iconProps}
              className={styles[`${rootClass}__iconGroup__icon`]}
            />
          ))}
        </div>
        <div className={styles[`${rootClass}__carousel`]}>
          <CarouselState>
            {({ hoveredProject, handleHover }) => (
              <AliceCarousel
                items={projectList.map((project, index) => {
                  const { type, title, description, url, img } = project;
                  const carouselClass = classifiers =>
                    `${styles[rootClass + '__carousel' + classifiers]}`;
                  return (
                    <div
                      key={`carousel_slide-${index}`}
                      onMouseEnter={event => handleHover(event, title)}
                      onMouseLeave={event => handleHover(event, '')}
                      style={
                        hoveredProject === title
                          ? {
                              backgroundImage: `url('${img.url}')`,
                              backgroundSize: 'cover',
                              backgroundBlendMode: 'multiply',
                              backgroundColor: '#000000c4',
                              color: 'black',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              maxHeight: 400,
                              minHeight: 400
                            }
                          : { maxHeight: 400, minHeight: 400 }
                      }
                    >
                      <div
                        style={{
                          display: hoveredProject !== title ? 'initial' : 'none'
                        }}
                      >
                        <h2 children={title} />
                        <h4 children={type} />
                      </div>
                      <p
                        className={
                          hoveredProject === title
                            ? `${carouselClass(
                                '__description'
                              )} ${carouselClass('__description-active')}`
                            : `${carouselClass(
                                '__description'
                              )} ${carouselClass('__description-inactive')}`
                        }
                        children={description}
                      />
                      <div
                        className={styles[`${rootClass}__carousel__linkIcon`]}
                      />
                    </div>
                  );
                })}
                responsive={{
                  0: { items: 1 },
                  500: { items: 2 },
                  1024: { items: 3 }
                }}
                autoPlayInterval={5000}
                autoPlayDirection="lft"
                autoPlay={true}
                autoHeight={true}
                fadeOutAnimation={true}
                // mouseDragEnabled={true}
                disableAutoPlayOnAction={true}
              />
            )}
          </CarouselState>
        </div>
      </div>
    </Base>
  );
};

export default Projects;
