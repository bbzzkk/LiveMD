import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import S from './style';

const Others = props => {
  const { signOut } = props.store.authStore;
  const handleSignout = async () => {
    await signOut().then(() => props.history.push('/'));
  };
  return (
    <S.SignOutButton
      variant="contained"
      color="primary"
      size="small"
      startIcon={<S.ExitIcon />}
      style={{ marginTop: 'auto', marginLeft: '-34%' }}
      onClick={handleSignout}
    >
      Sign out
    </S.SignOutButton>
  );
};

export default withRouter(inject('store')(observer(Others)));
