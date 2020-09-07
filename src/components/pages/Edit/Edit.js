import React from 'react';

import './Edit.scss';

const Edit = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { itemId } = props.match.params;

  return (
    <div className="Edit">
      <h1>EDIT</h1>
    </div>
  );
};

export default Edit;
