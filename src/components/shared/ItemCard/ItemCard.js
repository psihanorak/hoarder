import React from 'react';

import './ItemCard.scss';

const ItemCard = (props) => {
  const { item } = props;

  return (
    <div className="ItemCard">
      <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
