import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import WorkspaceGlobalStyle from '@/styles/workspaceGlobal';

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
  withRouter,
} from 'react-router-dom';
import S from './style';

const Workspace = props => {
  const { match, history } = props;
  const { boardStore, authStore, teamStore } = props.store;
  useEffect(() => {
    const fetchData = async () => {
      await teamStore.getTeamList(authStore.user.id);
      if (Object.keys(props.match.params).length === 0) {
        boardStore.getAllDocuments(authStore.user.id);
      } else {
        const teamname = props.match.params.team;
        const team = teamStore.getOneTeam(teamname);
        await boardStore
          .getAllDocuments(team.teamId)
          .then(() => teamStore.setCurrentTeam(teamname));
      }
    };
    fetchData();
  }, [props.match.params, boardStore.documents]);

  return (
    <>
      <WorkspaceGlobalStyle />
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header />
          {/* <Main isDoc={boardStore.documents.length} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Main isDoc={boardStore.documents.length} />}
            />
            <Route exact path="/settings" render={() => <TeamSettings />} />
            <Route path="/:team/settings" render={() => <TeamSettings />} />
            <Route
              exact
              path="/:team"
              render={() => <Main isDoc={boardStore.documents.length} />}
            />
            <Route exact path="/:team/people" render={() => <PeopleMain />} />
          </Switch>
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default withRouter(inject('store')(observer(Workspace)));
