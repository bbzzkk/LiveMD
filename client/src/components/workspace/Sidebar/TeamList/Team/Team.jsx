import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import S from './style';

const Team = props => {
  const { marked, teamname } = props.team;
  const { teamStore, boardStore } = props.store;
  const [isMarked, setMarked] = useState(marked);
  const handleMarked = () => {
    if (isMarked) {
      setMarked(false);
    } else {
      setMarked(true);
    }
  };

  const handleTeamClick = () => {
    props.history.push(`/board/${teamname}`);
  };

  return (
    <S.ListItem
      onClick={handleTeamClick}
      button
      style={{ textAlign: 'center', borderBottom: '1px solid black' }}
    >
      {/* <S.ListItemContainer onClick={handleMarked}>
        <S.StarIcon style={{ color: isMarked ? 'yellow' : 'green' }} />
      </S.ListItemContainer> */}
      <S.ListItemText style={{ color: '#00796b' }}>{teamname}</S.ListItemText>
    </S.ListItem>
  );
};

export default withRouter(inject('store')(observer(Team)));
