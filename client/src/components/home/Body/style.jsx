import styled from 'styled-components';

export default {
  col_1: styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-color: #000000;
  `,
  col_1_1: styled.div`
    color: transparent;
    background: -webkit-gradient(linear,left top,right top,from(#ff7a1b),color-stop(#de3fe3),to(#22dcbd));
    background: linear-gradient(90deg,#ff7a1b,#de3fe3,#22dcbd);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 2.7em; 
    height: 50px;
    font-weight: bold;
    line-height: normal;
  `,
  col_1_2: styled.div`
  color: white;
  font-size: 1.3em; 
  height: 20px;
`,
  col_2: styled.div`
  width: 100%;
  height: 600px;

  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: white;
`,

col_3: styled.div`
width: 100%;
height: 500px;

align-items: center;
justify-content: center;
background-color: #bbbbbb;
color: white;
`,
};
