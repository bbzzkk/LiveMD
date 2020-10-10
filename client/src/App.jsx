import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './pages';
import { GlobalStyle } from './styles';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </>
);

export default App;
