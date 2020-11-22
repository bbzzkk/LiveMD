import styled from 'styled-components';

export default {
  //col1
  col_1: styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-color: #000000;
  `,
  col_1_1: styled.h2`
    color: transparent;
    background: -webkit-gradient(linear,left top,right top,from(#ff7a1b),color-stop(#de3fe3),to(#22dcbd));
    background: linear-gradient(90deg,#ff7a1b,#de3fe3,#22dcbd);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 60px; 
    font-weight: bold;
    line-height: initial;
  `,
  col_1_2: styled.div`
  color: white;
  font-size: 1.3em; 
  text-align-last: center;
  padding-top: 15px;
`,
  col_1_3: styled.div`
  position : relative;
  top : 65px;
  `,

  col_1_button: styled.button`
    background: black;
    color: #fff;
    border: 1px solid;
  `,

  //col2
  col_2: styled.div`
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: white;
`,
  col_2_1: styled.div`

  `,
  col_2_2: styled.div`

  `,
  col_2_3: styled.div`

  `,

  //col3
  col_3: styled.div`
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  background-color: #bbbbbb;
  color: white;
  `,
  col_2_1: styled.div`

  `,
  col_2_2: styled.div`

  `,
  col_2_3: styled.div`

  `,
};
