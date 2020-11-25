import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import Board from './models/Board';

import getUuid from 'src/utils/uuid';

const BoardStore = types
  .model('BoardStore', {
    board: types.maybe(Board),
  })
  .actions(self => ({
    setBoard(board) {
      self.board = board;
    },
    createDocument: flow(function* () {
      const documentId = getUuid();
      const ownerId = self.board.owner.id;
      yield api
        .post(`http://localhost:3010/documents?${ownerId}`, {
          id: documentId,
        })
        .then(() => {
          self.board.addDocument(documentId);
        })
        .catch(e => {
          console.log('catch 문 들어옴');
          console.log(e);
        });
    }),
  }));

export default BoardStore;
