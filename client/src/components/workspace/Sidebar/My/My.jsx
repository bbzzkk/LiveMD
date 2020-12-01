import React from 'react';
import { withRouter } from 'react-router-dom';
import S from './style';

const My = props => {
  const handleClickMy = () => {
    props.history.push('/board');
  };
  return (
    <S.My button onClick={handleClickMy}>
      <S.MyText primary="My Workspace" />
    </S.My>
  );
};
export default withRouter(My);
