import React from 'react';

import { Redirect, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Main } from '@/pages';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthProtection = ({ option, RouteComponent, store }) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const user = JSON.parse(localStorage.getItem('USER_INFO'));
  const { setUser } = store.authStore;
  const { getTeamList } = store.teamStore;

  // console.log(`option: ${option}`);
  // const setTeamList = async userId => await getTeamList(userId);
  if (user) {
    setUser(user);
    // setTeamList(user.id);
  }

  if (option !== 0) {
    if (token) {
      return <RouteComponent />;
    } else {
      setTimeout(() => {
        toast.info(`🤣 로그인하셔야 이용가능합니다 🤣`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 0);

      return <Redirect to="/login" />;
    }
  } else {
    if (!token) {
      return <RouteComponent />;
    } else {
      return <Redirect to="/board" />;
    }
  }
};

export default AuthProtection;
