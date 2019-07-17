import React from 'react';
import moment from 'moment';

const Education = ({ list, ...otherProps }) => {
  const cards = list.map((item, index) => (
    <section key={`education-${index}`}>
      <div>
        <h4 children={item.type} />
        <p children={item.institution} />
      </div>
      <section>
        <h6 children={moment(item.start).format('MMM-YYYY')} />
        <h6
          children={
            !item.end
              ? moment().format('MMM-YYYY')
              : moment(item.end).format('MMM-YYYY')
          }
        />
      </section>
      <span />
    </section>
  ));
  return (
    <div {...otherProps}>
      <h1>Education</h1>
      {cards}
    </div>
  );
};

export default Education;
