import React from 'react';
import Icon from '../../components/atoms/Icon';

const contactList = [
  {
    name: 'Email',
    children: <Icon name="Email" className="generic" />,
    onClick: () => (window.location.href = 'mailto:johntan05@gmail.com')
  },
  {
    name: 'LinkedIn',
    children: <Icon name="LinkedIn" className="generic" />,
    onClick: () =>
      window
        .open('https://linkedin.com/in/john-tan-phd-5b1860162', '_blank')
        .focus()
  },
  {
    name: 'Instagram',
    children: <Icon name="Instagram" className="generic" />,
    url: 'https://www.instagram.com/instajohnctan/'
  },
  {
    name: 'Github',
    children: <Icon name="Github" className="generic" />,
    onClick: () => window.open('https://github.com/jctan05', '_blank').focus()
  }
];

export default contactList;
