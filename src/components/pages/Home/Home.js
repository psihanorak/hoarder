import React from 'react';

import ItemCard from '../../shared/ItemsCard';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

import './Home.scss';

class Home extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('get items broke', err));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('delete item broke', err));
  }

  render() {
    const { items } = this.state;

    const itemCard = items.map((item) => <ItemCard key={item.id} item={item} deleteItem={this.deleteItem}/>);

    return (
      <div className="Home">
        <h1>My Beautiful Collected Pieces</h1>
        <div className="card-group">
          {itemCard}
        </div>
      </div>
    );
  }
}

export default Home;
