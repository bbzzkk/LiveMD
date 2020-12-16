import React from 'react';
import { inject, observer } from 'mobx-react';
import S from './style';

const Overview = props => {
  const { user } = props.store.authStore;
  return (
    <S.Container>
      <S.Avatar src={user.thumbnail} />
      <S.Username>{`${user.username}`}</S.Username>
    </S.Container>
  );
};

export default inject('store')(observer(Overview));
