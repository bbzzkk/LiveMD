import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Amplify from 'aws-amplify';
import { Main, OAuth2RedirectHandler } from '@/pages';
import { LoadingIndicator } from '@/components/common';

import { GlobalStyle } from '@/styles';
import getCurrentUser from '@/utils/APIUtils';
import awsExports from './aws-exports';
import { Login } from './pages';

Amplify.configure(awsExports);

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
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
