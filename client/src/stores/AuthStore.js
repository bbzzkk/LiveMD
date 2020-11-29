import { types, flow, destroy, applySnapshot } from 'mobx-state-tree';
import api from 'axios';

import User from './models/User';

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
      setUser(user) {
        const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
        api.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
        self.user = User.create({ ...user });
      },
      getUser: flow(function* (userId) {
        yield api
          .get(`http://localhost:5000/api/v1/users/${userId}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          })
          .then(res => {})
          .catch(e => {
            console.log('catch 문 들어옴');
            console.log(e);
          });
      }),
      signInGoogle2: flow(function* (data) {
        let user;
        yield api
          .post(`http://localhost:5000/api/v1/auth/signin`, data, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          })
          .then(res => {
            const {
              username,
              id,
              email,
              thumbnail,
              ACCESS_TOKEN,
            } = res.data.data;
            if (ACCESS_TOKEN && ACCESS_TOKEN.length) {
              api.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${ACCESS_TOKEN}`;
              localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);
              user = {
                username: username,
                id: id,
                email: email,
                thumbnail: thumbnail,
              };
              localStorage.setItem('USER_INFO', JSON.stringify(user));
            }
          })
          .catch(e => {
            console.log('catch 문 들어옴');
            console.log(e);
          });
        self.user = User.create({ ...user });
        self.isAuthenticated = true;
      }),
      signOut: flow(function* () {
        yield api
          .post(`http://localhost:5000/api/v1/auth/signout`, {
            withCredentials: true,
          })
          .then(() => {
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('USER_INFO');
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
