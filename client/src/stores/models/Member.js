import { types, flow } from 'mobx-state-tree';

import Team from './Team';

export const MemberBase = types.model('MemberBase', {
  id: types.identifier,
  team: types.maybe(types.reference(types.late(() => Team))),
  email: types.string,
  role: types.enumeration('role', ['owner', 'admin', 'writer', 'reader']),
  status: types.enumeration('status', ['pending', 'active']),
});

const Member = MemberBase.named('Member').actions(self => ({
  changeRole: flow(function* changeRole(role) {
    yield db.update('boards', { id: self.id, role });
    self.role = role;
  }),

  join: flow(function* join() {
    const { fromIndex, toArr, toIndex } = meta;

    if (fromIndex === toIndex) return;

    const order = calcOrder(meta);
    yield db.update('boards', { id: boardToMove.id, order });
    boardToMove.order = order;
    toArr.replace(toArr.slice().sort((a, b) => a.order - b.order));
  }),
}));

export default types.late(() => Member);
