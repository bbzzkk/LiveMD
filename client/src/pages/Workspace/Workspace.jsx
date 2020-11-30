import React from 'react';

import {
  Header,
  Sidebar,
  Main,
  TeamSettings,
  PeopleMain,
} from '@/components/workspace';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import S from './style';

const Workspace = props => {
  return (
    <>
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header/>
            <Switch>
                <Route exact path="/board" render={() => (<Main/>)} />
                <Route exact path="/board/documents" render={() => (<Main/>)} />
                <Route exact path="/board/people" render={() => (<PeopleMain/>)} />
                <Route exact path="/board/settings" render={() => (<TeamSettings/>)} />
            </Switch>  
          {/* <PeopleMain"/> */}
          {/* <Main/> */}
          {/* <TeamSettings /> */}
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default Workspace;
