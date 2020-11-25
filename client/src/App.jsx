import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login,
  Main,
  OAuth2RedirectHandler,
  PageList,
  Page,
  Workspace,
} from '@/pages';

import CreateRoom from '@/pages/VideoChat/CreateRoom';
import Room from '@/pages/VideoChat/Room';

import '@/cattaz.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route exact path="/page/" component={PageList} />
          <Route exact path="/page/:page" component={Page} />
          <Route path="/create" component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
