import React from 'react';

import { Redirect, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Main } from '@/pages';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const landingCheck = (RouteComponent, authStore) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  // const au;
  const redirect = props => <Redirect to="/board/redirect" />;
  if (!token) {
    return inject('store')(observer(RouteComponent));
  } else {
    return redirect;
  }
};

export default landingCheck;
