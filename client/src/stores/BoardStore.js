import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import getUuid from 'src/utils/uuid';

import Document from './models/Document';

import { DOCUMENT_API } from '@/utils/APIconfig';

const BoardStore = types
  .model('BoardStore', {
    documents: types.optional(types.array(Document), []),
  })
  .actions(self => ({
    addDocument(docId) {
      const document = Document.create({
        id: docId,
        createdAt: new Date(),
        title: 'undefined',
        updatedAt: new Date(),
      });
      self.documents.push(document);
    },

    getAllDocuments: flow(function* (ownerId) {
      self.documents.length = 0;
      try {
        const response = yield api.get(
          `${DOCUMENT_API}/documents?oid=${ownerId}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          }
        );

        const documentList = response.data.data.content;
        documentList.map(({ docId }) => {
          self.addDocument(docId);
        });

        // id  title create update
      } catch (error) {
        console.log('failed: ', error);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    }),

    createDocument: flow(function* (ownerId) {
      const documentId = getUuid();
      yield api
        .post(`${DOCUMENT_API}/documents?oid=${ownerId}`, {
          docId: documentId,
        }, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          })
        .then(() => {
          self.addDocument(documentId);
        })
        .catch(e => {
          console.log('catch 문 들어옴');
          console.log(e);
        });
    }),
  }));

export default BoardStore;
