import { types } from 'mobx-state-tree';

const Item = types
  .model('Document', {
    id: types.maybe(types.number),
    owner: types.string,
    title: types.string,
  })
  .views(self => ({
    get departmentName() {
      return self.department ? self.department.name : '';
    },
  }))
  .actions(self => ({
    setProperty(key, value) {
      self[key] = value;
    },
    validate() {
      return self.age >= 20;
    },
  }));

export default types.late(() => Item);
