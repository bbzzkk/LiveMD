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
    // yield db.update('boards', { id: self.id, role });
    self.role = role;
  }),

  join: flow(function* join() {
  }),
}));

export default types.late(() => Member);
