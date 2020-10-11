import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const OAuth2RedirectHandler = props => {
  const { location } = props;

  const getUrlParameter = name => {
    const copyName = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${copyName}=([^&#]*)`);

    const results = regex.exec(location.search);

    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const token = getUrlParameter('token', location);
  const error = getUrlParameter('error', location);

  if (token) {
    localStorage.setItem('accessToken', token);
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    );
  }

  return (
    <Redirect
      to={{
        pathname: '/',
        state: {
          from: location,
          error,
        },
      }}
    />
  );
};

OAuth2RedirectHandler.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default OAuth2RedirectHandler;
