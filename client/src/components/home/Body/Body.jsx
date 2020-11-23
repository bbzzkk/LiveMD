import React, { Component, Fragment } from 'react';
import S from './style';
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Block4 from './Block4';
import Block1 from './Block1';
import Block2 from './Block2';

const styles = {
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)',
  },
};

const animateList = [<Block1/>, <Block2/>, '둠칫칫칫', <Block4/>, '둠칫칫둠'];

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

);

export default Body;
