import { values } from 'mobx';
import { flow, types, applySnapshot } from 'mobx-state-tree';

import Document from './Document';

const Board = types
  .model('Board', {
    id: types.identifier,
    documents: types.optional(types.array(Document), []),
  })
  .actions(self => ({
    addDocument(documentId) {
      const document = Document.create({
        id: documentId,
        createdAt: new Date(),
      });
      self.documents.push(document);
    },
  }));

export default Board;
