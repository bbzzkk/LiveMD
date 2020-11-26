import React, { Component, Fragment } from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Block4 from './Block4';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
//import data from "./Block4Data.json";

const styles = {
  block1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },

  block2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },
};

const animateList = [<Block1 />, <Block2 />, <Block3 />, <Block4 />];

const Body = () => (
  /* <h1 style={styles.title}>{`${item}`}</h1> */
  // <Fragment>
  //    {animateList.map((item, key) => (
  //     <div style={styles.block1} key={key}>
  //       <Fade top>
  //          {item}
  //       </Fade>
  //     </div>
  //   ))}
  //   </Fragment>
  <Fragment>
    <div style={styles.block1}>
      <Fade top>{animateList[0]}</Fade>
    </div>

    <div style={styles.block1}>
      <Fade top>{animateList[1]}</Fade>
    </div>

    <div style={styles.block1}>
      <Fade top>{animateList[2]}</Fade>
    </div>

    <div style={styles.block2} id="howTo">
      <Fade top>{animateList[3]}</Fade>
    </div>
  </Fragment>
);

export default Body;
