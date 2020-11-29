import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import Fade from 'react-reveal/Fade';

export default {
  FadeContainer: styled(Fade)``,
  OutsideContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      235deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  `,
  InsideContainer: styled(Card)`
    && {
      background-color: white;
      border: 1px white solid;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    padding: 50px 50px 30px 50px;
    max-width: 345;
    min-width: 25vw;
    text-align: center;
    min-height: 20vw;
  `,
  Heading: styled.div`
    margin-bottom: 2em;
    font-size: 30px;
    line-height: 35px;
    color: black;
    text-align: center;
    margin-bottom: 2em;
  `,
  Header: styled.div``,
};
