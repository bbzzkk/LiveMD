import React from 'react';
import {inject, observer} from 'mobx-react';
import S from './style';

import AddIcon from '@material-ui/icons/Add';

const CreateButton = props => {
  const { authStore, boardStore } = props.store;
  const { id, email } = authStore.user;
  const handleClick = () => {
    boardStore.createDocument(id)
  }
  return (
    <S.container onClick = {handleClick}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'}}>
        <AddIcon/> 
        <S.text>
          New Document
        </S.text>
      </div>
    </S.container>

  );
};
export default inject('store')(observer(CreateButton));
