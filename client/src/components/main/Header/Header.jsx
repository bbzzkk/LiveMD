import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Header = () => (
  <S.Header>
    <Link to="/">
      <img className="logo-img" src="/images/logo.png" alt="logo" />
    </Link>
    <Link className="sign-in" to="/signIn">
      Sign in
    </Link>
  </S.Header>
);

export default Header;
