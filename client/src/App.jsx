import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Login, Home, Workspace, Editor } from '@/pages';

import { None } from '@/components/workspace';
import { Auth } from '@/components/HOC';

import '@/cattaz.css';

const App = props => {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              ACCESS_TOKEN ? (
                <Auth
                  option={1}
                  RouteComponent={Workspace}
                  store={props.store}
                />
              ) : (
                <Auth option={0} RouteComponent={Home} store={props.store} />
              )
            }
          />

          <Route
            exact
            path="/login"
            render={() => (
              <Auth option={0} RouteComponent={Login} store={props.store} />
            )}
          />
          <Route
            path="/settings"
            render={() => (
              <Auth option={1} RouteComponent={Workspace} store={props.store} />
            )}
          />
          <Route exact path="/None" render={() => <None />} />
          <Route
            exact
            path="/:team"
            render={() => (
              <Auth option={1} RouteComponent={Workspace} store={props.store} />
            )}
          />

          <Route
            path="/:team/people"
            render={() => (
              <Auth option={1} RouteComponent={Workspace} store={props.store} />
            )}
          />
          <Route
            path="/:team/settings"
            render={() => (
              <Auth option={1} RouteComponent={Workspace} store={props.store} />
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
