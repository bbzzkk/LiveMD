import React from 'react';

import Header from '@/components/workspace/Header';
import Sidebar from '@/components/workspace/Sidebar';
import Main from '@/components/workspace/Main';
import PeopleMain from '@/components/workspace/PeopleMain';

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
          <PeopleMain />
        </S.MainContainer>
      </S.Workspace>

    </>
  );
};

export default Workspace;
