import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../helpers/propz/itemShape';

const ItemCard = (props) => {
  const { item, deleteItem } = props;

  const editLink = `/edit/${item.id}`;

  return (
    <div className="col-3 mb-3">
      <div className="Item card border-0">
        <img className="card-img-top" src={item.itemImage} alt="horder"></img>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          <Link to={editLink} className="btn btn-dark"><i className="far fa-edit"></i></Link>
          <button className="btn btn-danger" onClick={() => { deleteItem(item.id); }}><i className="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: itemShape.itemShape,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemCard;
