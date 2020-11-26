import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const S = {
  Container: styled.div`
  display: flex;
  flex-flow: row wrap;
  // background-color: white;
  // margin-left: 0%;
  margin-right: 1%;
`,
  Horizon: styled.h1`
  width: 100%; 
  text-align: center; 
  border-bottom: 1px solid #9fbedf; 
  line-height: 0.1em;
  margin: 10px 0 20px;
  margin-top: 3%;
  `,
  Text: styled.span`
  background:#fff; 
  padding:0 10px;
  // font-size: 50%;
  `
};

export default S;