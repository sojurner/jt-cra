import React from 'react';
import Icon from '../../components/atoms/Icon';

const contactList = [
  {
    name: 'Email',
    children: <Icon name="Email" className="generic" />,
    url: 'johntan05@gmail.com'
  },
  {
    name: 'LinkedIn',
    children: <Icon name="LinkedIn" className="generic" />,
    url: 'linkedin.com/in/john-tan-phd-5b1860162'
  },
  {
    name: 'Phone',
    children: <Icon name="Phone" className="generic" />,
    url: '909-558-5267'
  },
  {
    name: 'Github',
    children: <Icon name="Github" className="generic" />,
    url: 'https://github.com/jctan05'
  }
];

export default contactList;
