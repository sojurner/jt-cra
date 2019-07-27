import React from 'react';
import List from '../../molecules/List';
import Typography from '../../atoms/Typography';

const Contact = ({ enableTooltip, contacts, className }) => {
  const [tooltip, setTooltip] = React.useState('');
  const parsedContacts = contacts.map(contact => {
    return {
      ...contact,
      onMouseEnter: enableTooltip ? () => setTooltip(contact.name) : () => {},
      onMouseLeave: enableTooltip ? () => setTooltip('') : () => {}
    };
  });

  return (
    <>
      {Boolean(tooltip) && enableTooltip && (
        <Typography
          className={`${className}__tooltip`}
          variant={'p'}
          children={tooltip}
        />
      )}
      <List
        listItems={parsedContacts}
        className={`${className}__contactList`}
      />
    </>
  );
};

export default Contact;
