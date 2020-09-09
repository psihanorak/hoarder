import React from 'react';

import ItemCard from '../ItemCard/ItemCard';

const AllStuff = (props) => {
  const itemCards = (allItems) => {
    const itemList = allItems.map((item) => <ItemCard item={item} key={item.id} />);
    return itemList;
  };

  return (
    <div className="AllStuff">
      {itemCards(props.items)}
    </div>
  );
};

export default AllStuff;
