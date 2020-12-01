import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import S from './style';

const Team = props => {
  const { marked, teamname } = props.team;
  const { teamStore } = props.store;
  const [isMarked, setMarked] = useState(marked);
  const handleMarked = () => {
    if (isMarked) {
      setMarked(false);
    } else {
      setMarked(true);
    }
  };
  return (
    <S.ListItem button style={{textAlign : 'center' }}>
      {/* <S.ListItemContainer onClick={handleMarked}>
        <S.StarIcon style={{ color: isMarked ? 'yellow' : 'green' }} />
      </S.ListItemContainer> */}
      <S.ListItemText style={{color : 'white'}}>{teamname}</S.ListItemText>
    </S.ListItem>
  );
};

export default inject('store')(observer(Team));
