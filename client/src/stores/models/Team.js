import { types, flow, destroy, getParent } from 'mobx-state-tree';

import Board from './Board';
import Member from './Member';

export const TeamBase = types.model('TeamBase', {
  id: types.identifier,
  name: types.string,
  board: types.maybe(types.reference(types.late(() => Board))),
  owner: types.maybe(Member),
  members: types.optional(types.array(Member), []),
  marked: types.optional(types.boolean, false),
});

const Team = TeamBase.named('Team').actions(self => ({
  changeName(name) {
    self.name = name;
  },

  // addMember: flow(function* addMembers(member) {
  //   self.members.push(list);
  // }),

  // deleteMember: flow(function* deleteMember(member) {
  //   destroy(member);
  // }),
}));

export default types.late(() => Team);
