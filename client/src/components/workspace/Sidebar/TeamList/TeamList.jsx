import React, { useEffect } from 'react';

import AddTeam from './AddTeam';
import Team from './Team';
import S from './style';
import { inject, observer } from 'mobx-react';

const TeamList = props => {
  const { user } = props.store.authStore;
  const { teamList, getTeamList } = props.store.teamStore;

  return (
    <S.List>
      <S.ListItem>
        <S.ListItemText primary="Teams" />
        <AddTeam />
      </S.ListItem>
      <S.List component="div" disablePadding>
        {teamList.map((team, index) => {
          return <Team key={team.teamId} team={team} index={index + 1}
           selectedIndex={props.selectedIndex} 
           setSelectedIndex={props.setSelectedIndex} />;
        })}
      </S.List>
    </S.List>
  );
};

export default inject('store')(observer(TeamList));
