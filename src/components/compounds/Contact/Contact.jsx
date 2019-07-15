import React from 'react';
import List from '../../molecules/List';
import Typography from '../../atoms/Typography';

const Contact = ({ contacts }) => {
  return <List listItems={contacts} className="contactList" />;
};

export default Contact;
