import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import S from './style';

const Header = props => {
  const { isAuthenticated, signOut, user } = props.store.authStore;
  const handleSignOut = () => {
    toast.info(`${user.username} 님 오늘도 수고하셨어요 🤩`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    signOut();
  };
  return (
    <S.Header>
      <Link to="/">
        <img className="logo-img" src="/images/logo.png" alt="logo" />
      </Link>
      {isAuthenticated ? (
        <h3 className="sign-out" onClick={handleSignOut}>
          Sign out
        </h3>
      ) : (
        <Link to="/login">
          <h3 className="sign-in">Sign in</h3>
        </Link>
      )}
    </S.Header>
  );
};

export default inject('store')(observer(Header));
