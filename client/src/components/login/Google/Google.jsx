import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import GoogleLogin from 'react-google-login';
import config from '@/config';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import S from './style';

const Google = props => {
  const responseGoogle = async data => {
    const { teamStore, boardStore, authStore } = props.store;
    
    await authStore
      .signInGoogle2(data)
      .catch(e => console.log('error'));
    props.history.push('/board');

    toast.success(`${authStore.user.username} 님 반갑습니다😉`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const responseFail = data => {
    console.log('로그인 실패');
    console.log(data);
    toast.error('로그인에 실패하셨습니다..😥', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <GoogleLogin
      clientId={config.google.clientID}
      render={renderProps => (
        <S.LoginButton
          button
          // variant="contained"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <S.Text>Sign in via Google</S.Text>
        </S.LoginButton>
      )}
      onSuccess={responseGoogle}
      onFailure={responseFail}
      className="btn btn-outline-danger"
    />
  );
};
export default withRouter(inject('store')(observer(Google)));
