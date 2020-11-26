import React from 'react';

import Header from '@/components/workspace/Header';
import Sidebar from '@/components/workspace/Sidebar';
import Main from '@/components/workspace/Main';

import S from './style';

const Workspace = props => {
  console.log(props.match);
  return (
    <>
      <S.Workspace>
        <S.SidebarContainer>
          <Sidebar />
        </S.SidebarContainer>

        <S.MainContainer>
          <Header />
          <Main />
        </S.MainContainer>
      </S.Workspace>
    </>
  );
};

export default Workspace;
