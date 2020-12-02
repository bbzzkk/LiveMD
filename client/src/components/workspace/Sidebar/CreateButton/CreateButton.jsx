import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import S from './style';

import AddIcon from '@material-ui/icons/Add';

const CreateButton = props => {
  const { authStore, boardStore, teamStore } = props.store;
  const { id, email } = authStore.user;
  const handleClick = () => {
    if (Object.keys(props.match.params).length === 0) {
      boardStore.createDocument(authStore.user.id);
    } else {
      const teamname = props.match.params.team;
      const team = teamStore.getOneTeam(teamname);
      boardStore.createDocument(team.teamId);
    }
  };
  return (
    <S.container onClick={handleClick}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <AddIcon />
        <S.text>문서 생성하기</S.text>
      </div>
    </S.container>
  );
};
export default withRouter(inject('store')(observer(CreateButton)));
