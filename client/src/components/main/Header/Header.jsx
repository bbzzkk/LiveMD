import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const Header = props => {
  const { authenticated, onLogout } = props;

  return (
    <S.Header>
      <Link to="/">
        <img className="logo-img" src="/images/logo.png" alt="logo" />
      </Link>
      {/* <a
        className="sign-in"
        href={
          'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect'
        }
      >
        sign in
      </a> */}
      {authenticated ? (
        <a className="sign-in" href="#" onClick={onLogout}>
          Sign out
        </a>
      ) : (
        <a
          className="sign-in"
          href={
            'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect'
          }
        >
          Sign in
        </a>
      )}
      {/* {!authenticated ? (
        <a
          className="sign-in"
          href={
            'http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect'
          }
        >
          Sign in
        </a>
      ) : null} */}
      {/* <Link className="sign-in" to="/signIn">
      Sign in
    </Link> */}
    </S.Header>
  );
};

export default Header;
