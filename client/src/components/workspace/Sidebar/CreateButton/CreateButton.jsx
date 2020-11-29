import React from 'react';

import S from './style';

import AddIcon from '@material-ui/icons/Add';

const CreateButton = () => {

  return (
    <S.container>
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
export default CreateButton;
