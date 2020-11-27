import React from 'react';

import {
  Header,
  Sidebar,
  Main,
  TeamSettings,
} from '@/components/workspace';

import S from './style';

const Workspace = props => {
  console.log('This is workspace!!!!!');
  return (
    <>
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header />
          {/* <Main /> */}
          <TeamSettings />
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default Workspace;
