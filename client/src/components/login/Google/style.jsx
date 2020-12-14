import styled, { keyframes } from 'styled-components';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const sheen = keyframes`
    10%, 90% { transform: translate3d(-1px, 0, 0); }

    20%, 80% {
        transform: translate3d(1px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-1px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(1px, 0, 0);
    }
    `;

const S = {
  LoginButton: styled.div`
    display: inline-block;
    font-size: 19;
    font-family: SF Pro KR, SF Pro Display, SF Pro Icons, Apple Gothic, HY Gulim,
      MalgunGothic, HY Dotum, Lexi Gulim, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    border: 2px solid #f5f5f7;
    border-radius: 30px;
    color: #fff;
    background-color: #000;
    font-weight: bold;
    min-width: 28px;
    width: 80%;
    height: 3.3em;
    /* bottom: -150px; */
    /* padding-top: 10px; */

    &:hover {
      background-color: white;
      color: #000;
      animation: ${sheen} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      /* border: 5px groove #061621;
      border-radius: 17px; */
    }
  `,
  Text: styled.div`
    margin-top: 0.7em;
  `,

  // Button: styled.div`
  //   text-align: center;
  //   border: none;
  //   color: white;
  //   padding: 16px 32px;
  //   text-align: center;
  //   text-decoration: none;
  //   display: inline-block;
  //   font-size: 16px;
  //   margin: 4px 2px;
  //   transition: all 0.2s ease-in-out;
  //   background: rgb(26, 143, 144);
  //   background: radial-gradient(
  //     circle,
  //     rgba(26, 143, 144, 1) 0%,
  //     rgba(69, 33, 218, 1) 100%
  //   );
  //   border-radius: 8px;
  //   cursor: pointer;
  //   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
  //     0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //   &:hover {
  //     background-color: #2194e0;
  //     border-bottom: 4px solid darken(#2194e0, 10%);

  //     animation: ${sheen} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  //     transform: translate3d(0, 0, 0);
  //     backface-visibility: hidden;
  //     perspective: 1000px;
  //   }
  // `,
};

export default S;
