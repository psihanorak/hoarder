import React from 'react';

import './MyStuff.scss';

const MyStuff = (props) => {
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

  return (
    <div className="Stuff">
      <h1>MY STUFF</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={editStuffEvent}>Edit</button>
        <button className="btn btn-secondary" onClick={singleStuffEvent}>Single</button>
      </div>
    </div>
  );
};

export default MyStuff;
