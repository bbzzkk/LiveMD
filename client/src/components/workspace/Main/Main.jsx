import React from 'react';
import { Link } from 'react-router-dom';

import Overview from './Overview'
import Documents from './Documents'
import Toolbar from './Toolbar'

import S from './style';

const Main = props => {
  return (
    <>
      <Overview></Overview>
      <Toolbar></Toolbar>
      <Documents></Documents>
    </>
  );
};

export default Main;
