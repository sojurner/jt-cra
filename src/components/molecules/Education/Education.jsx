import React from 'react';

const Education = ({ list, ...otherProps }) => {
  const cards = list.map((item, index) => (
    <section key={`education-${index}`}>
      <h3 children={item.institution} />
      <p children={item.type} />
      <h6 children={item.start} />
      <h6 children={item.end} />
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
