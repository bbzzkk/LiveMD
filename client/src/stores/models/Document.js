import { types, flow } from 'mobx-state-tree';

export const DocumentBase = types.model('DocumentBase', {
  id: types.identifier, // uuid로 만들어지고
  title: types.optional(types.string, 'untitled'), // default "untitled"
  createdAt: types.Date,
  updatedAt: types.maybe(types.Date),
});

const Document = DocumentBase.named('Document').actions(self => ({
  changeTitle(title) {
    self.title = title;
  },
  changeupdateAt(updatedAt) {
    self.updatedAt = updatedAt;
  },
}));

export default types.late(() => Document);
