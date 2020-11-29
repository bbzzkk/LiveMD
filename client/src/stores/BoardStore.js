import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import getUuid from 'src/utils/uuid';

import Document from './models/Document';

const BoardStore = types
  .model('BoardStore', {
    documents: types.optional(types.array(Document), []),
  })
  .actions(self => ({
    addDocument(docId) {
      const document = Document.create({
        id: docId,
        createdAt: new Date(),
        title: "undefined",
        updatedAt: new Date(),
      });
      self.documents.push(document);
    },

    getAllDocuments: flow(function* (ownerId) {
      self.documents.length = 0;      
      try {
        const response = yield api.get(
          `http://localhost:8080/api/v1/documents?oid=${ownerId}`
        );

        // id  title create update

        const documentList = response.data.data.content;
        documentList.map(({ docId }) => {
          self.addDocument(docId);
        });
      } catch (error) {
        console.log('failed: ', error);
      }
    }),

    createDocument: flow(function* (ownerId) {
      const documentId = getUuid();
      // const ownerId = self.board.owner.id;
      yield api
        .post(`http://localhost:3010/documents?${ownerId}`, {
          id: documentId,
        })
        .then(() => {
          // self.board.addDocument(documentId);
        })
        .catch(e => {
          console.log('catch 문 들어옴');
          console.log(e);
        });
    }),
  }));

export default BoardStore;
