import makeInspectable from 'mobx-devtools-mst';
import { types } from 'mobx-state-tree';

import AuthStore from './AuthStore';
import BoardStore from './BoardStore';

const rootStore = types
  .model('RootStore', {
    authStore: types.maybe(AuthStore),
    boardStore: types.maybe(BoardStore),
  })

export default makeInspectable(
  rootStore.create({
    authStore: AuthStore.create(),
    boardStore: BoardStore.create(),
  }),
);
