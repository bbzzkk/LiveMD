import React from 'react';

import Header from '@/components/workspace/Header';
import Sidebar from '@/components/workspace/Sidebar';
import Main from '@/components/workspace/Main';

import S from './style';

const Workspace = props => {
  return (
    <div className="main_wrap">
      
      {/* <S.Workspace>  */}
         <Header className={"main_header"}/>
         <S.SidebarContainer className={"main_sidebar"}>
          <Sidebar />
        </S.SidebarContainer>
        
        <S.MainContainer className={"main_container"}>
   
          <Main/>
        </S.MainContainer>
      {/* </S.Workspace> */}
    </div>
  );
};

export default Workspace;
