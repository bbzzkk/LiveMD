import { types } from 'mobx-state-tree';

const Item = types
  .model('User', {
    id: types.maybe(types.number),
    name: types.string,
    age: types.optional(types.maybe(types.number), 20),
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
