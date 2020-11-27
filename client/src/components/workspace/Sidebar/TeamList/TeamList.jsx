import React from 'react';

import AddTeam from './AddTeam';
import Team from './Team';
import S from './style';
import { inject, observer } from 'mobx-react';

const TeamList = props => {
  const { teamStore } = props.store;

  return (
    <S.List>
      <S.ListItem>
        <S.ListItemText primary="Teams" />
        <AddTeam />
      </S.ListItem>
      <S.List component="div" disablePadding>
        <Team />
      </S.List>
    </S.List>
  );
};

export default inject('store')(observer(TeamList));
