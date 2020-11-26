import { types, flow, destroy } from 'mobx-state-tree';
import api from 'axios';

import User from './models/User';
import Board from './models/Board';

const AuthStore = types
  .model('AuthStore', {
    user: types.maybe(User),
    isAuthenticated: types.optional(types.boolean, false),
  })
  .actions(self => {
    const loadRefreshToken = () => {
      self.token = self.cookies.get('REFRESH_TOKEN');
    };

    return {
      signInGoogle2: flow(function* (data) {
        let user = { username: '', id: '', email: '' };
        yield api
          .post(`http://localhost:5000/api/v1/auth/signin`, data, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          })
          .then(res => {
            const { username, id, email, ACCESS_TOKEN } = res.data.data;
            if (ACCESS_TOKEN && ACCESS_TOKEN.length) {
              api.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${ACCESS_TOKEN}`;
              localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);
            }
            user = { username, id, email };
            // console.log(user);
          })
          .catch(e => {
            console.log('catch 문 들어옴');
            console.log(e);
          });
        const board = Board.create();
        self.user = User.create({ ...user, board: board });
        self.isAuthenticated = true;
      }),
      signOut: flow(function* () {
        yield api
          .post(`http://localhost:5000/api/v1/auth/signout`, {
            withCredentials: true,
          })
          .then(() => {
            localStorage.removeItem('ACCESS_TOKEN');
            api.defaults.headers.common['Authorization'] = null;
          })
          .catch(e => {
            console.log('catch 문 들어옴');
            console.log(e);
          });
        self.isAuthenticated = false;
        self.User = {};
      }),
    };
  })
  .views(self => {
    return {
      get isLogged() {
        return self.isAuthenticated;
      },
    };
  });

export default AuthStore;
