import React from 'react';
import { Link } from 'react-router-dom';

import Documents from './Documents';
import Toolbar from '../Header/Toolbar';

import S from './style';

const Main = props => {
  return (
    <S.WorkspaceContainer className="document_wrap container">
      <Documents></Documents>
    </S.WorkspaceContainer>
  );
};

export default Main;
