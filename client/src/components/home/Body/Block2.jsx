import React from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const styles = {
  ment1: {
    textAlign: 'center',
    fontSize: 32,
    color: '#a1a1a6',
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 600,
    lineHeight: 'normal',
  },

  span_LiveMD: {
    color: 'white',
    fontSize: 40,
  },
};


const ColorButton2 = withStyles(() => ({
  root: {
    fontSize: 19,
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    border: '2px solid',
    borderImage: 'linear-gradient(to right, #005e7f, #61b6cd)',
    borderImageSlice: 1,
    borderImageWidth: 2,
    color: '#fff',
    background: '#000',
    fontWeight: 'bold',
    minWidth: '28px',
    width: '150px',
    bottom: '-6rem',
    paddingTop: '10px',

    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}))(Button);


const Block2 = () => {
  return (
    <>
      <h2 style={styles.ment1}>
        Untact 시대에도 어김없이 찾아오는 회의 시간.
        <br />
        같은 공간에 없어도 함께 있는 것 같은 편안함.
        <br />
        동료들과의 소통. 동시에 이루어지는 문서 작업.
        <br />
        <br />
        <S.ment2_sc>
          서로의 얼굴, 목소리를 확인하며 채팅까지 가능한 소통 기능.
          <br />
          마크다운을 활용하여 문서를 작업할 수 있는 협업 기능.
          <br />
        </S.ment2_sc>
        이 모든 것의 집합체가 보여주는 놀라운 능력을
        <br />
        여기 <span style={styles.span_LiveMD}>LiveMD</span>가 소개합니다.
      </h2>

      <a href="#howTo">
        <ColorButton2 variant="contained">이용 방법</ColorButton2>
      </a>
    </>
  );
};

export default Block2;