import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import { Workspace, Login, Main, OAuth2RedirectHandler } from '@/pages';
import { LoadingIndicator } from '@/components/common';

import { GlobalStyle } from '@/styles';
=======

import { Main, OAuth2RedirectHandler, Workspace } from '@/pages';
import { LoadingIndicator } from '@/components/common';

>>>>>>> b00edb9c3315d39721fd1b1874bcd81528cf2ace
import getCurrentUser from '@/utils/APIUtils';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadCurrentlyLoggedInUser = () => {
    setLoading(true);

    getCurrentUser()
      .then(response => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleLogout = e => {
    localStorage.removeItem('accessToken');
    setAuthenticated(false);
    setCurrentUser(null);
    alert('로그아웃 되었습니다.');
    e.preventDefault();
  };

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Workspace />
    /* {
        <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
        </Switch>
      </Router> 
    } */
  );
};

export default App;
