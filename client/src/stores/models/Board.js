import { values } from 'mobx';
import { flow, types, applySnapshot } from 'mobx-state-tree';

import User from './User';
import Team from './Team';
import Document from './Document';

export const BoardBase = types.model('BoardBase', {
  id: types.identifier,
  owner: types.maybe(User),
  documents: types.optional(types.array(Document), []),
});

const Board = BoardBase.named('Board').actions(self => ({
  addDocument(documentId) {
    const document = Document.create({
      id: documentId,
      createdAt: new Date(),
    });
    self.documents.push(document);
  },
}));

export default Board;
