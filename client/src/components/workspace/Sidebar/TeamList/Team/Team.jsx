import React from 'react';
import S from './style';

const Team = () => {
  const handleAddTeam = () => {};
  return (
    <S.ListItem button>
      <S.ListItemContainer>
        <S.StarIcon />
      </S.ListItemContainer>
      <S.ListItemText primary="bbzzkk" />
    </S.ListItem>
  );
};

export default Team;
