import React from 'react';

import Sidebar from '@/components/workspace/Sidebar';
import Document from '@/components/workspace/Document';

import { documents } from '@/utils/Mock';

import S from './style';

const Workspace = () => {
  return (
    <S.Workspace>
      <S.SidebarContainer>
        <Sidebar />
      </S.SidebarContainer>
      <S.ContentContainer>
        {/* {documents.data.map(({ owner, createdAt, title }) => {
          return <Document owner={owner} createdAt={createdAt} title={title} />;
        })} */}
        <Content />
      </S.ContentContainer>
    </S.Workspace>
  );
};

export default Workspace;
