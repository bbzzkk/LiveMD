import React, {Component, Fragment } from 'react';
import S from './style';
import {Grid} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const animateList = [
  '소개합니다.',
  '둠칫둠칫',
  '둠칫칫칫',
  '둠둠칫칫',
  '둠칫칫둠',
];

const styles = {
  block: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },

  title: {
    textAlign: 'center',
    fontSize: 100,
    color: '#fff',
    fontFamily: 'SF Pro KR,SF Pro Display,SF Pro Icons,Apple Gothic,HY Gulim,MalgunGothic,HY Dotum,Lexi Gulim,Helvetica Neue,Helvetica,Arial,sans-serif',
    fontWeight: 600,
  },
}

const Body = () => (
    <Fragment>
      {animateList.map ((item, key ) => (
        <div style={styles.block} key={key}>
          <Fade top>
            <h1 style={styles.title}>{`${item}`}</h1>
          </Fade>
        </div>
      ))}
    </Fragment>
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
