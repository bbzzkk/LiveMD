import makeInspectable from 'mobx-devtools-mst';
import { types } from 'mobx-state-tree';

import UserStore from './UserStore';
import DocumentStore from './DocumentStore.js';

const userStore = UserStore.create({
  users: [],
});

const stores = {
  userStore,
};

export default stores;

makeInspectable(userStore);
