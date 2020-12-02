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
    addDocument(docId, title) {
      const document = Document.create({
        id: docId,
        createdAt: new Date(),
        title: title || 'undefined',
        updatedAt: new Date(),
      });
      self.documents.push(document);
    },

    getAllDocuments: flow(function* (ownerId) {
      // try {
      const response = yield api.get(
        `http://localhost:8080/api/v1/documents?oid=${ownerId}`,
      );
      // .get(`${DOCUMENT_API}/owners/${ownerId}`);

      self.documents.length = 0;

      // if (response !== undefined) {
      //   if (response.data.data.status === 200) {
      const documentList = response.data.data.content;
      documentList.map(({ docId, title }) => {
        self.addDocument(docId, title);
      });
      //   }
      // }

      // id  title create update
      // }
      // catch (error) {
      //   console.log('failed: ', error);
      //   self.documents.length = 0;
      //   if (error.response) {
      //     console.log(error.response.data);
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //   }
      // }
    }),

    createDocument: flow(function* (ownerId) {
      const documentId = getUuid();
      yield api
        .post(`${DOCUMENT_API}/owners/${ownerId}`, {
          docId: documentId,
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
