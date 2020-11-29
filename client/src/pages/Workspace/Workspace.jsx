import React from 'react';

import {
  Header,
  Sidebar,
  Main,
  TeamSettings,
  PeopleMain,
} from '@/components/workspace';

import S from './style';

const Workspace = props => {
  return (
    <>
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header />
          {/* <PeopleMain /> */}
          <Main />
          {/* <TeamSettings /> */}
        </S.MainContainer>
      </S.Workspace>

    </>
  );
};

export default Workspace;
