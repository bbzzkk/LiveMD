import React from 'react';
import { Link } from 'react-router-dom';

import Filtering from './Filtering';
import Documents from './Documents';
import Toolbar from '../Header/Toolbar';
import None from './None';

import S from './style';

const Main = props => {
  return (
    <S.WorkspaceContainer className="document_wrap container">
      <Filtering/>
      {props.isDoc ? <Documents /> : <None />}
    </S.WorkspaceContainer>  
  );
};

export default Main;
