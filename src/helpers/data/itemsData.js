import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const createItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

export default {
  getItemsByUid,
  getItem,
  createItem,
  deleteItem,
};
