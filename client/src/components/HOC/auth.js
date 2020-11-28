import React from 'react';

import { Redirect, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Main } from '@/pages';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthProtection = ({ option, RouteComponent, authStore }) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const user = JSON.parse(localStorage.getItem('USER_INFO'));
  const { setUser } = authStore;

  console.log(`option: ${option}`);

  if (user) {
    setUser(user);
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
      console.log('hihihihihihihihi I AM BOARD!!!!!!!');
      return <Redirect to="/board" />;
    }
  }
};

export default AuthProtection;
