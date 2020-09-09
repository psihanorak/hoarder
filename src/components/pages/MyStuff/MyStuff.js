import React, { useState, useEffect } from 'react';

import AllStuff from '../../shared/AllStuff/AllStuff';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

import './MyStuff.scss';

const MyStuff = (props) => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((res) => setItems(res))
      .catch((err) => console.error(err));
  };

  useEffect(getItems, []);

  const editStuffEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    props.history.push(`/edit/${itemId}`);
  };

  const singleStuffEvent = (e) => {
    e.preventDefault();
    const itemId = '12345';
    props.history.push(`/single/${itemId}`);
  };

  const deleteStuffEvent = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => {
        getItems();
      })
      .catch((err) => console.error('deleteItem did not work', err));
  };

  return (
    <div className="Stuff">
      <h1>MY STUFF</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={editStuffEvent}>Edit</button>
      </div>
      <div className="AllStuff">
        <AllStuff items={items} singleStuffEvent={singleStuffEvent} deleteStuffEvent={deleteStuffEvent} />
      </div>
    </div>
  );
};

export default MyStuff;
