import { types, flow, destroy, getParent } from 'mobx-state-tree';

import Board from './Board';
import Member from './Member';

export const TeamBase = types.model('TeamBase', {
  teamId: types.identifier,
  teamname: types.string,
  thumbnail: types.maybe(types.string),
  board: Board,
  members: types.optional(types.array(Member), []),
  marked: types.optional(types.boolean, false),
});

const Team = TeamBase.named('Team').actions(self => ({
  changeName(name) {
    self.name = name;
  },

  addOwner(memberId, teamId) {
    const owner = Member.create({
      memberId: memberId,
      teamId: teamId,
      role: 'owner',
      status: 'active',
    });
    self.members.push(owner);
  },
  // addMember: flow(function* addMembers(member) {
  //   self.members.push(list);
  // }),

  // deleteMember: flow(function* deleteMember(member) {
  //   destroy(member);
  // }),
}));

export default types.late(() => Team);
