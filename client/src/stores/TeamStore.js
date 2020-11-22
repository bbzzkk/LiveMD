import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Team from './models/Team';

import { getUuid } from '@/utils';

const TeamStore = types
  .model('TeamStore', {
    team: types.maybe(Team),
  })
  .actions(self => {
    let controller;
    return {
      afterCreate() {
        self.load();
      },
      load: flow(function* () {
        controller = window.AbortController && new window.AbortController();
        try {
          const response = yield window.fetch(`http://localhost:3010/teams`, {
            signal: controller.signal,
          });
          const documents = yield response.json().data;
          applySnapshot(self.documents, documents);
          console.log('success');
        } catch (error) {
          console.log('failed: ', error);
        }
      }),
      reload() {
        console.log('reload');
        if (controller) controller.abort();
        self.load();
      },
      beforeDestroy() {
        if (controller) controller.abort();
      },
      createDocument: flow(function* () {
        const documentId = getUuid;
        const ownerId = self.board.owner.id;

        yield api
          .post(`http://localhost:3010/teams`, {
            id: documentId,
          })
          .then(response => {
            if (response.status(200)) self.board.addDocument(documentId);
            else console.log('server error');
          })
          .catch(e => {
            console.log(e);
          });
      }),
    };
  });

export default BoardStore;
