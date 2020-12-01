import { types } from 'mobx-state-tree';


export const UserBase = types.model('UserBase', {
  id: types.identifier,
  username: types.string,
  email: types.string,
  thumbnail: types.string,
});

const User = UserBase.named('User').actions(self => ({
  changeName(name) {
    self.name = name;
  },
}));

export default User;
