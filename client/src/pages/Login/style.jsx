import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export default {
  OutsideContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(43, 43, 55, 1) 35%,
      rgba(1, 12, 14, 1) 100%
    );
  `,
  InsideContainer: styled(Card)`
    background-color: #ffffff;
    padding: 50px 50px 30px 50px;
    max-width: 345;
    min-width: 25vw;
    text-align: center;
    min-height: 17vw;
  `,
  Heading: styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 35px;
    color: #313131;
    text-align: center;
    margin-bottom: 4vw;
  `,
};
