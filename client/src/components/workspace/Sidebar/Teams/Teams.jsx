import React from 'react';

import S from './style';

const Teams = () => {
  return (
    <S.List>
      <S.ListItem>
        <S.ListItemText primary="Teams" />
        <S.AddIcon />
      </S.ListItem>
      <S.List component="div" disablePadding>
        <S.ListItem button>
          <S.ListItemContainer>
            <S.StarIcon />
          </S.ListItemContainer>
          <S.ListItemText primary="bbzzkk" />
        </S.ListItem>
      </S.List>
    </S.List>
  );
};

export default Teams;
