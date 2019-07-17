import React from 'react';
import moment from 'moment';

const Experience = ({ list, ...otherProps }) => {
  const [selected, setSelected] = React.useState(null);
  const cards = list.map((item, index) => (
    <section key={`experience-${index}`}>
      <div
        onMouseLeave={() => setSelected(null)}
        onMouseEnter={() => setSelected(item.title)}
      >
        <h4 children={item.title} />
        <p children={item.location} />

        <h5 style={item.title === selected ? { left: 0 } : { left: -400 }}>
          {item.description}
        </h5>
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
      <h1>Experience</h1>
      {cards}
    </div>
  );
};

export default Experience;
