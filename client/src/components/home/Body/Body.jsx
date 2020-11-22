import React, { Component, Fragment } from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const styles = {
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },

  title: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 40,
    color: '#fff',
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 600,
    bottom: '-20px',
  },

  ment1 : {
    textAlign: 'center',
    fontSize: 32,
    color: '#a1a1a6',
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 600,
    lineHeight: 'normal',
  },

  button : {
    fontSize: 17,
    color: '#fff',
    fontFamily:
      'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    border: '1px solid #f5f5f7',
    borderRadius: '18px',
    fontWeight: 'bold',
  },
};

const block1 = () => {
  return (
    <>
      <h2 style={styles.title}>LiveMD</h2>
      <S.col_1_1>협업의 즐거움.</S.col_1_1>
      <Button variant="outlined" style={styles.button}>
        구글 로그인하기
      </Button> 
    </>
  );
};

const block2 = () => {
  return (
    <>
      <h2 style={styles.ment1}>
      Untact 시대에도 어김없이 찾아오는 회의 시간.<br/>
      같은 공간에 없어도 함께 있는 것 같은 편안함.<br/>
      동료들과의 소통. 동시에 이루어지는 문서 작업.<br/><br/>
      서로의 얼굴, 목소리를 확인하며 채팅까지 가능한 소통 기능.<br/> 
      마크다운을 활용하여 문서를 작업할 수 있는 협업 기능.<br/>
      이 모든 것의 집합체가 보여주는 놀라운 능력을<br/>
      여기 LiveMD가 소개합니다.
      </h2>
    </>
  );
};

const animateList = [block1(), block2(), '둠칫칫칫', '둠둠칫칫', '둠칫칫둠'];

const Body = () => (
  <Fragment>
    {animateList.map((item, key) => (
      <div style={styles.block} key={key}>
        <Fade top>
          {/* <h1 style={styles.title}>{`${item}`}</h1> */}
          {item}
        </Fade>
      </div>
    ))}
  </Fragment>

  // animateList[0]
  // {/* <S.col_1>
  //   <Grid
  //     container
  //     spacing={1}
  //     direction="column"
  //     justify="center"
  //     alignItems="center"
  //   >
  //     <Grid item>
  //       <S.col_1_1>혼자보단 함께.</S.col_1_1>
  //     </Grid>
  //     <Grid item>
  //       <S.col_1_2>
  //         모두가 같은 페이지에서 서로의 영상을 보며 마크다운을 작성하는 경험을 제공합니다.<br/>
  //         덕분에 서로의 목소리를 듣고, 얼굴을 보며, 마크다운을 활용하여 문서를 작성할 수 있답니다.
  //         {/* Communication + Collaboration = Awesome */}
  //       {/* </S.col_1_2>
  //     </Grid>
  //     <Grid item>
  //       <S.col_1_3>
  //         <S.col_1_button>
  //           <a href="#howTo">
  //           사용 방법
  //           </a>
  //         </S.col_1_button>
  //       </S.col_1_3>
  //     </Grid>
  //   </Grid>
  // </S.col_1>

  // <S.col_2>

  // </S.col_2>

  // <S.col_3
  // id="howTo">

  // </S.col_3> */}
);

export default Body;
