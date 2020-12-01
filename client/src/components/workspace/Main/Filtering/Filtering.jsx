import React from 'react';
import { Link } from 'react-router-dom';

import Searching from './Searching';
import Sorting from './Sorting';
import S from './style';

const Filtering = props => {
  return (
    <S.Container>
      <div className="serching" style={{position : 'relative', left : '3.4rem'}}>
        <Searching />
      </div>

      <div className="sorting" style={{position : 'relative', left : '11.9rem'}}>
        <Sorting />
      </div>
    </S.Container>
  );
};

export default Filtering;
