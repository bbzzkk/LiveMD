import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
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
  const getTeamList = async () => {
    if (Object.keys(props.match.params).length === 0) {
      boardStore.getAllDocuments(authStore.user.id);
    } else {
      const teamname = props.match.params.team;
      console.log(teamStore.teamList);
      // if (teamStore.teamList.length === 0) {
      //   await teamStore.getTeamList(authStore.user.id).then(async () => {
      //     const team = teamStore.getOneTeam(teamname);
      //     await boardStore.getAllDocuments(team.teamId);
      //   });
      // }
      console.log('바로 접근');
      console.log(teamStore.teamList);
      console.log(props.location);
      console.log(props.match);
      console.log(teamname);
      const team = teamStore.getOneTeam(teamname);
      console.log('team이 있나요???');
      console.log(team);
      boardStore.getAllDocuments(team.teamId);
    }
  };
  useEffect(() => {
    console.log('workspace useEffect 실행');
    getTeamList();
  }, [props.match.params]);

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
