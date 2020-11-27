import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Team from './models/Team';
import Board from './models/Board';

import { getUuid } from '@/utils';

const TeamStore = types
  .model('TeamStore', {
    currentTeam: types.maybe(Team),
    teamList: types.optional(types.array(Team), []),
  })
  .views(self => ({
    get AllteamList() {
      return self.teamList ? self.teamList : [];
    },
  }))
  .actions(self => {
    return {
      getTeamList: flow(function* (userId) {
        try {
          console.log(userId);
          const response = yield api.get(
            `http://localhost:5252/api/v1/teams?userId=${userId}`,
          );
          const teamList = response.data.data;
          console.log(teamList);

          teamList.map(({ teamId, teamname, marked }) => {
            const team = Team.create({
              teamId: teamId,
              teamname: teamname,
              marked: marked,
            });
            self.teamList.push(team);
          });
          console.log(teamList);
          console.log('이것이 팀리스트호출이다');
          // response.data.map(team => {
          //   const team = Team.create({ teamId: teamId, team });
          // });
        } catch (error) {
          console.log('failed: ', error);
        }
      }),
      createTeam: flow(function* (teamData) {
        const response = yield api
          .post(`http://localhost:5252/api/v1/teams`, teamData)
          .catch(e => {
            return -1;
          });
        const { teamId, memberId, result } = response.data;
        if (result) {
          const board = Board.create();
          const team = Team.create({
            teamId: teamId,
            owner: teamData.userId,
            teamname: teamData.teamname,
            description: teamData.description,
            board: board,
          });
          team.addOwner(memberId, teamId);
          self.teamList.push(team);
        } else console.log('server error');
      }),
      markTeam: flow(function* (teamData) {
        // const response = yield api
        //   .post(`http://localhost:5252/api/v1/teams`, teamData)
        //   .catch(e => {
        //     return -1;
        //   });
        // const { teamId, memberId, result } = response.data;
        // if (result) {
        //   const board = Board.create();
        //   const team = Team.create({
        //     teamId: teamId,
        //     owner: teamData.id,
        //     teamname: teamData.teamname,
        //     description: teamData.description,
        //     board: board,
        //   });
        //   team.addOwner(memberId, teamId);
        //   self.teamList.push(team);
        //   console.log(self.teamList);
        // } else console.log('server error');
      }),
    };
  });

export default TeamStore;
