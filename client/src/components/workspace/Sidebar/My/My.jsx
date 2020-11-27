import React from 'react';

import S from './style';

const My = () => {
  const handleClickMy = () => {
    console.log('go to My Workspace');
  };
  return (
    <S.My button onClick={handleClickMy}>
      <S.MyText primary="My Workspace" />
    </S.My>
  );
};
export default My;
