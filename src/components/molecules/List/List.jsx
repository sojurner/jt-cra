import React from 'react';
import ListItem from '../../atoms/ListItem';

const List = ({ listItems, listProps }) => {
  const list = listItems.map(listItemProps => {
    return <ListItem {...listItemProps} />;
  });

  return <ul {...listProps}>{list}</ul>;
};

export default List;
