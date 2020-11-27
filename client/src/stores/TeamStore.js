import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Team from './models/Team';

import { getUuid } from '@/utils';

const TeamStore = types
  .model('TeamStore', {
    currentTeam: types.maybe(Team),
    teamList: types.optional(types.array(Team), []),
  })
  .actions(self => {
    return {
      getTeamList: flow(function* (userId) {
        try {
          console.log(`http://localhost:5252/api/v1/teams?userId=${userId}`);
          const response = yield api.get(
            `http://localhost:5252/api/v1/teams?userId=${userId}`,
          );
          console.log(response);
          // if (response.data.result) {
          // }
          // applySnapshot(self.documents, documents);
          // console.log('success');
        } catch (error) {
          console.log('failed: ', error);
        }
      }),
      createTeam: flow(function* (data) {
        yield api
          .post(`http://localhost:5252/teams`, data)
          .then(response => {
            console.log(response);
            if (response.status(200)) self.teamList.push('hi');
            else console.log('server error');
          })
          .catch(e => {
            console.log(e);
          });
      }),
    };
  });

export default TeamStore;
