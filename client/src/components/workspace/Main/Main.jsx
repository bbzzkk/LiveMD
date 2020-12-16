import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import Filtering from './Filtering';
import Documents from './Documents';
import Toolbar from '../Header/Toolbar';
import None from './None';

import S from './style';

const Main = props => {
  const { boardStore } = props.store;
  useEffect(() => {}, [boardStore.documents]);
  return (
    <S.WorkspaceContainer className="document_wrap container">
      <Filtering />
      {/* {props.isDoc ? <Documents /> : <None />} */}
      {boardStore.documents.length ? <Documents /> : <None />}
    </S.WorkspaceContainer>
  );
};

export default inject('store')(observer(Main));
