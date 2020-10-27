import React from 'react';

import Header from '@/components/workspace/Header';
import Sidebar from '@/components/workspace/Sidebar';
import Main from '@/components/workspace/Main';

import S from './style';

const Workspace = props => {
  return (
    <>
      <S.Workspace>
        <Header />
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Main />
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default Workspace;
