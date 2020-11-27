import { types } from 'mobx-state-tree';

import Board from './Board';

export const UserBase = types.model('UserBase', {
  id: types.identifier,
  username: types.string,
  email: types.string,
  thumbnail: types.string,
  board: types.maybe(Board),
});

const User = UserBase.named('User').actions(self => ({
  changeName(name) {
    self.name = name;
  },
}));

export default User;
