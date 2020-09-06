import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allItems = response.data;
      const myItems = [];

      if (allItems) {
        Object.keys(allItems).forEach((itemId) => {
          const item = allItems[itemId];
          item.id = itemId;
          myItems.push(item);
        });
      }

      resolve(myItems);
    })
    .catch((err) => reject(err));
});

const getItemById = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

export default { getItemsByUid, getItemById };
