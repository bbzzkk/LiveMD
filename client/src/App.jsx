import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Login, Main, PageList, Page, Workspace } from '@/pages';
import CreateRoom from '@/pages/VideoChat/CreateRoom';
import Room from '@/pages/VideoChat/Room';

import { Auth, LandingCheck } from '@/components/HOC';
import { GlobalStyle } from '@/styles';
import '@/cattaz.css';

const App = props => {
  const { authStore } = props.store;
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(0, Main, authStore)} />
          {/* <Route exact path="/workspace" component={Workspace} /> */}
          {/* <Route path="/login/redirect" component={Login} /> */}
          <Route path="/login" component={Auth(0, Login, authStore)} />
          <Route exact path="/page/" component={PageList} />
          <Route exact path="/page/:page" component={Page} />
          <Route path="/create" component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
          <Route path="/board/redirect" component={Workspace} />
          <Route
            exact
            path="/board/:team"
            component={Auth(1, Workspace, authStore)}
          />
          <Route path="/board" component={Auth(1, Workspace, authStore)} />
        </Switch>
      </Router>
    </>
  );
};

export default inject('store')(observer(App));
