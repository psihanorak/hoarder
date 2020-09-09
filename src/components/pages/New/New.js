import React from 'react';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';

import './New.scss';

class New extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  addItemEvent = (e) => {
    e.preventDefault();
    const { itemDescription, itemImage, itemName } = this.state;

    const newItem = {
      itemDescription, itemImage, itemName,
    };
    newItem.uid = authData.getUid();

    itemsData.createItem(newItem)
      .then(() => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('newItem did not work', err));
  }

  render() {
    const { itemDescription, itemImage, itemName } = this.state;

    return (
      <div className="New">
        <h1>NEW STUFF</h1>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              value={itemName}
              onChange={this.changeNameEvent}
              placeholder= "Enter item name..."
              />
          </div>
          <div className="form-group">
            <label htmlFor="itemImage">Item Image</label>
            <input
              type="text"
              className="form-control"
              id="itemImage"
              value={itemImage}
              onChange={this.changeImageEvent}
              placeholder="Enter item image url..."
              />
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Item Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              value={itemDescription}
              onChange={this.changeDescriptionEvent}
              placeholder="Enter item description..."
              />
          </div>
          <button className='btn btn-primary' onClick={this.addItemEvent} >Add New Item</button>
        </form>
      </div>
    );
  }
}

export default New;
