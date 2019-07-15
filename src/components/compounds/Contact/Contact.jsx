import React from 'react';
import List from '../../molecules/List';
import Typography from '../../atoms/Typography';

const Contact = ({ contacts }) => {
  const [tooltip, setTooltip] = React.useState('');
  const parsedContacts = contacts.map(contact => {
    return {
      ...contact,
      onMouseEnter: () => setTooltip(contact.name),
      onMouseLeave: () => setTooltip('')
    };
  });

  return (
    <>
      {Boolean(tooltip) && (
        <Typography
          className="contactTooltip"
          variant={'p'}
          children={tooltip}
        />
      )}
      <List listItems={parsedContacts} className="contactList" />
    </>
  );
};

export default Contact;
