import React from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 60,
    color: '#fff',
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 600,
    bottom: '-20px',
  },
};

const ColorButton1 = withStyles(() => ({
  root: {
    fontSize: 19,
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    border: '2px solid #f5f5f7',
    borderRadius: '30px',
    color: '#fff',
    backgroundColor: '#000',
    fontWeight: 'bold',
    minWidth: '28px',
    width: '300px',
    bottom: '-150px',
    paddingTop: '10px',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))(Button);

const Block1 = () => {
  return (
    <>
      <h2 style={styles.title}>LiveMD</h2>

      <S.ment1_sc>협업의 즐거움.</S.ment1_sc>

      <ColorButton1 variant="contained">구글 로그인으로 시작하기</ColorButton1>
    </>
  );
};

export default Block1;
