import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import S from './style';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Others = props => {
  const { user, signOut } = props.store.authStore;
  const handleSignout = async () => {
    await signOut().then(() => {
      props.history.push('/');
      toast.info(`${user.username} 님 오늘도 수고하셨어요 🤩`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };
  return (
    <S.SignOutButton
      variant="contained"

      size="small"
      startIcon={<S.ExitIcon />}
      style={{ marginTop: 'auto', 
                marginLeft: '-30%', 
                position: 'relative',
                bottom: '1.2rem',
                color:'white',
                backgroundColor:'#131236',
                fontFamily:
                'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
              }}
      onClick={handleSignout}
    >
      Sign out
    </S.SignOutButton>
  );
};

export default withRouter(inject('store')(observer(Others)));
