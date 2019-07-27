import React from 'react';
import ListItem from '../../atoms/ListItem';
import styles from '../../../styles/components/molecules/List.module.scss';

const List = ({ listItems, ...listProps }) => {
  console.log(listProps.className);
  const list = listItems.map(listItemProps => {
    return <ListItem {...listItemProps} />;
  });
  listProps.className = styles[listProps.className];
  return <ul {...listProps}>{list}</ul>;
};

export default List;
