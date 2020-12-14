import { reaction } from 'mobx';
import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';

import User from './models/User';
import Board from './models/Board';
import BoardStore from './BoardStore';
import Team from './models/Team';
import { check } from 'prettier';

it('can create a document"', async () => {
  const owner = User.create({
    id: '12345',
    name: 'yeonzzu',
    email: 'yeonzzu2@gmail.com',
  });
  const board = Board.create({
    id: '111111111',
    owner: owner,
  });
  const boardStore = BoardStore.create({
    board,
  });

  await boardStore.createDocument();
  expect(boardStore.board.documents.length).toBe(1);
});

// describe('UNIT TEST', () => {
//   let boardStore;

//   beforeAll(done => {
//     const owner = User.create({
//       id: '12345',
//       name: 'yeonzzu',
//       email: 'yeonzzu2@gmail.com',
//     });
//     const board = Board.create({
//       id: '111111111',
//       owner: owner,
//     });
//     boardStore = BoardStore.create({
//       board,
//     });
//     done();
//   });
//   it('check document length', async () => {
//     await boardStore.createDocument();
//     expect(boardStore.board.documents.length).toBe(1);
//   });
// });
// https://codesandbox.io/s/muddy-shadow-0e8h0?fontsize=14
// https://medium.com/@jin3378s/jest-%EB%A1%9C-api-unit-test-%ED%95%98%EA%B8%B0-2fd4bd0b47f6

// it('can create a wishList', () => {
//   const list = WishList.create({
//     items: [
//       {
//         name: 'Happy Box',
//         price: 2000,
//       },
//     ],
//   });

//   expect(list.items.length).toBe(1);
//   expect(list.items[0].price).toBe(2000);
// });

// it('can add new items', () => {
//   const list = WishList.create();
//   const states = [];
//   const patches = [];

//   onSnapshot(list, snapshot => {
//     states.push(snapshot);
//   });

//   onPatch(list, patch => {
//     patches.push(patch);
//   });

//   list.add(
//     WishListItem.create({
//       name: 'Snow',
//       price: 10,
//     }),
//   );

//   expect(list.items.length).toBe(1);
//   expect(list.items[0].name).toBe('Snow');
//   list.items[0].changeName('White');
//   expect(list.items[0].name).toBe('White');

//   expect(getSnapshot(list)).toEqual({
//     items: [
//       {
//         name: 'White',
//         price: 10,
//         image: '',
//       },
//     ],
//   });

//   // __snapshots 폴더에 기록됨
//   // expect(getSnapshot).toMatchSnapshot()
//   // expect(states).toMatchSnapshot()
//   // expect(patches).toMatchSnapshot()
// });

// it('can calculate the total price of a wishList', () => {
//   const list = WishList.create({
//     items: [
//       {
//         name: 'Happy Box',
//         price: 2000,
//       },
//       {
//         name: 'White',
//         price: 10,
//         image: '',
//       },
//     ],
//   });

//   expect(list.totalPrice).toBe(2010);

//   let changed = 0;
//   reaction(
//     () => list.totalPrice,
//     () => changed++,
//   );
//   expect(changed).toBe(0);
//   list.items[0].changePrice(2010);
//   expect(changed).toBe(1);
// });
