import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {
  Login,
  Home,
  Workspace,
  Editor,
} from '@/pages';

import { Auth } from '@/components/HOC';

import '@/cattaz.css';

const App = props => {
  const { authStore } = props.store;
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Auth option={0} RouteComponent={Home} authStore={authStore} />
            )}
          />
          <Route
            exact
            path="/board:team"
            render={() => (
              <Auth
                option={1}
                RouteComponent={Workspace}
                authStore={authStore}
              />
            )}
          />
          <Route
            exact
            path="/board"
            render={() => (
              <Auth
                option={1}
                RouteComponent={Workspace}
                authStore={authStore}
              />
            )}
          />
          <Route
            exact
            path="/board/people"
            render={() => (
              <Auth
                option={1}
                RouteComponent={Workspace}
                authStore={authStore}
              />
            )}
          />
          <Route
            exact
            path="/board/documents"
            render={() => (
              <Auth
                option={1}
                RouteComponent={Workspace}
                authStore={authStore}
              />
            )}
          />
          <Route
            exact
            path="/board/settings"
            render={() => (
              <Auth
                option={1}
                RouteComponent={Workspace}
                authStore={authStore}
              />
            )}
          />
          
          <Route
            exact
            path="/login"
            render={() => (
              <Auth option={0} RouteComponent={Login} authStore={authStore} />
            )}
          />
          {/* <Route
            exact
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          /> */}
          {/* <Route exact path="/page/" component={PageList} /> */}
          <Route exact path="/page/:page" component={Editor} />
          {/* <Route exact path="/create" component={CreateRoom} />
          <Route exact path="/room/:roomID" component={Room} /> */}

        </Switch>
      </Router>
    </>
  );
};

export default inject('store')(observer(App));
