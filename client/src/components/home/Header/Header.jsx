import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Header = props => {
  return (
    <S.Header>
      <Link to="/">
        <img className="logo-img" src="/images/logo.png" alt="logo" />
      </Link>
      <Link to="/login">
        <h3 className="sign-in">Sign in</h3>
      </Link>
    </S.Header>
  );
};

export default Header;
