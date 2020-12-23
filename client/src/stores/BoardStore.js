import { types, flow } from 'mobx-state-tree';
import api from 'axios';

import getUuid from 'src/utils/uuid';

import Document from './models/Document';

import { GET_ALL_DOCUMENTS_API, CREATE_DOCUMENTS_API } from '@/utils/APIconfig';

const BoardStore = types
  .model('BoardStore', {
    documents: types.optional(types.array(Document), []),
  })
  .views(self => ({
    _documents() {
      return self.documents ? self.documents : [];
    },
  }))
  .actions(self => ({
    addDocument(docId, title) {
      const document = Document.create({
        id: docId,
        createdAt: new Date(),
        title: title || 'Untitled',
        updatedAt: new Date(),
      });
      self.documents.push(document);
    },

    getAllDocuments: flow(function* (ownerId) {
      // const response = yield api.get(`http://localhost:8080/api/v1/documents?oid=${ownerId}`);
      const response = yield api.get(`${GET_ALL_DOCUMENTS_API}${ownerId}`);

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
        .post(`${CREATE_DOCUMENTS_API}${ownerId}`, {
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
