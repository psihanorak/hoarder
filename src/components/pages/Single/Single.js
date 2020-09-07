import React from 'react';

import './Single.scss';

const Single = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { itemId } = props.match.params;

  return (
    <div className="Single">
      <h1>SINGLE STUFF</h1>
    </div>
  );
};

export default Single;
