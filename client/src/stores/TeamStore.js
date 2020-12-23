import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Team from './models/Team';

import { getUuid } from '@/utils/uuid';

import { GET_TEAMLIST_API, CREATE_TEAM_API } from '@/utils/APIconfig';

const TeamStore = types
  .model('TeamStore', {
    currentTeamIndex: types.maybe(types.integer),
    teamList: types.optional(types.array(Team), []),
  })
  .views(self => ({
    get _teamList() {
      return self.teamList ? self.teamList : [];
    },
  }))
  .actions(self => {
    return {
      initCurrentTeam() {
        self.currentTeamIndex = -1;
      },
      setCurrentTeam(teamname) {
        const teamIndex = self.teamList.findIndex(team => {
          return team.teamname === teamname;
        });
        self.currentTeamIndex = teamIndex;
      },

      getOneTeam(teamname) {
        const team = self.teamList.filter(team => {
          return team.teamname === teamname;
        })[0];
        return team;
      },

      getTeamList: flow(function* (userId) {
        try {
          const response = yield api.get(`${GET_TEAMLIST_API}${userId}`);
          const teamList = response.data.data;

          self.teamList.length = 0;
          teamList.map(({ teamId, teamname, marked }) => {
            const team = Team.create({
              teamId: teamId,
              teamname: teamname,
              marked: marked,
            });
            self.teamList.push(team);
          });
        } catch (error) {
          console.log('failed: ', error);
        }
      }),
      createTeam: flow(function* (teamData) {
        const response = yield api
          .post(`${CREATE_TEAM_API}`, teamData)
          .catch(e => {
            return -1;
          });
        const { teamId, memberId, result } = response.data;
        if (result) {
          const team = Team.create({
            teamId: teamId,
            owner: teamData.userId,
            teamname: teamData.teamname,
            description: teamData.description,
          });
          team.addOwner(memberId, teamId);
          self.teamList.push(team);
        } else console.log('server error');
      }),
      markTeam: flow(function* (teamData) {
        // const response = yield api
        //   .post(`${TEAM_API}/api/v1/teams`, teamData)
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
