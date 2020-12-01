import React from 'react';
import { Link } from 'react-router-dom';

import Searching from './Searching';
import Sorting from './Sorting';
import S from './style';

const Filtering = props => {
  return (
    <S.Container>
      <Searching />
      <Sorting />
    </S.Container>
  );
};

export default Filtering;
