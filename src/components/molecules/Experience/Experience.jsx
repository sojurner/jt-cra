import React from 'react';
import moment from 'moment';

const Experience = ({ list, ...otherProps }) => {
  const cards = list.map((item, index) => (
    <section key={`education-${index}`}>
      <div>
        <h4 children={item.title} />
        <p children={item.description} />
      </div>
      <div>
        <h6 children={moment(item.start).format('MMM-YYYY')} />
        <h6
          children={
            item.end === 'present'
              ? moment().format('MMM-YYYY')
              : moment(item.end).format('MMM-YYYY')
          }
        />
      </div>
    </section>
  ));
  return (
    <div {...otherProps}>
      <h1>Experience</h1>
      {cards}
    </div>
  );
};

export default Experience;
