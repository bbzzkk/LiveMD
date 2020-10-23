import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, OAuth2RedirectHandler, Editor } from '@/pages';
import { GlobalStyle } from '@/styles';
import { LoadingIndicator } from '@/components/common';
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
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                authenticated={authenticated}
                currentUser={currentUser}
                onLogout={handleLogout}
              />
            )}
          />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
