import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Board from './models/Board';

import getUuid from 'src/utils/uuid';

const BoardStore = types
  .model('BoardStore', {
    board: types.maybe(Board),
  })
  .actions(self => {
    let controller;
    return {
      // afterCreate() {
      //   self.load();
      // },
      // load: flow(function* () {
      //   controller = window.AbortController && new window.AbortController();
      //   try {
      //     const response = yield window.fetch(
      //       `http://localhost:3010/documents`,
      //       {
      //         signal: controller.signal,
      //       },
      //     );
      //     const documents = yield response.json().data;
      //     applySnapshot(self.documents, documents);
      //     console.log('success');
      //   } catch (error) {
      //     console.log('failed: ', error);
      //   }
      // }),
      // reload() {
      //   console.log('reload');
      //   if (controller) controller.abort();
      //   self.load();
      // },
      // beforeDestroy() {
      //   if (controller) controller.abort();
      // },
      createDocument: flow(function* () {
        const documentId = getUuid();
        // console.log(`owner:: ${self.board.owner}`);
        const ownerId = self.board.owner.id;
        // console.log(`documentId:: ${documentId}`);
        // console.log(`ownerId:: ${ownerId}`);

        yield api
          .post(`http://localhost:3010/documents?${ownerId}`, {
            id: documentId,
          })
          // .get(`http://localhost:3010/documents`)
          .then(response => {
            self.board.addDocument('123');
            // } else console.log('server error');
          })
          .catch(e => {
            console.log('catch 문 들어옴');
            console.log(e);
          });
      }),
    };
  });

export default BoardStore;
