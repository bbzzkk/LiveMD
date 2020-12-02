import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import { workspaceGlobalStyle } from '@/styles';

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
        boardStore.getAllDocuments(team.teamId);
      }
    };

    fetchData();
  }, [props.match.params, boardStore.documents]);

  return (
    <>
      <workspaceGlobalStyle />
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header />
          <Main isDoc={boardStore.documents.length} />
          <Switch>
            <Route exact path="/board/people" render={() => <PeopleMain />} />
            <Route
              exact
              path="/board/settings"
              render={() => <TeamSettings />}
            />
          </Switch>
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default withRouter(inject('store')(observer(Workspace)));
