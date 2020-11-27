import React from 'react';
import { Link } from 'react-router-dom';

import Documents from './Documents';
import Toolbar from '../Header/Toolbar';

import S from './style';

const Main = props => {
  return (
    <div className="document_wrap">
      <Documents></Documents>
    </div>
  );
};

export default Main;
