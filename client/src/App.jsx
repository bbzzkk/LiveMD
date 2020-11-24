import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Main, OAuth2RedirectHandler, PageList, Page, Workspace } from '@/pages';
import { LoadingIndicator } from '@/components/common';

// import { GlobalStyle } from '@/styles';
// import getCurrentUser from '@/utils/APIUtils';

import CreateRoom from '@/pages/VideoChat/CreateRoom';
import Room from '@/pages/VideoChat/Room';

import '@/cattaz.css';

const App = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const loadCurrentlyLoggedInUser = () => {
  //   setLoading(true);

  //   getCurrentUser()
  //     .then(response => {
  //       setCurrentUser(response);
  //       setAuthenticated(true);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // };

  // const handleLogout = e => {
  //   localStorage.removeItem('accessToken');
  //   setAuthenticated(false);
  //   setCurrentUser(null);
  //   alert('로그아웃 되었습니다.');
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   loadCurrentlyLoggedInUser();
  // }, []);

  // if (loading) {
  //   return <LoadingIndicator />;
  // }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Workspace} />
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

{
  /* <Router>
  <Switch>
    // <Route exact path="/" component={Main} />
    <Route exact path="/boards/:boardId" component={Board} />
    // <Route path="/login" component={Login} />
    // <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
  </Switch>
</Router>; */
}
export default App;
