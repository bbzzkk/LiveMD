import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import GoogleLogin from 'react-google-login';
import config from '@/config';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import S from './style';

const Google = props => {
  const responseGoogle = async data => {
    const { teamStore, boardStore, authStore } = props.store;
    console.log(teamStore);
    await authStore
      .signInGoogle2(data)
      .then(async () => {
        console.log('로그인 바로 직후 then!');
        boardStore.setBoard(authStore.user.board);
      })
      .catch(e => console.log(e.error));
    await teamStore.getTeamList(authStore.user.id).then(() => {
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
    });
  };
  const responseFail = () => {
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
        <S.Button
          className="btn btn-danger"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Google로 시작하기
        </S.Button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseFail}
      className="btn btn-outline-danger"
    />
  );
};
export default withRouter(inject('store')(observer(Google)));
