import styled from 'styled-components';

const S = {
  container: styled.button`
  background:#1AAB8A;
  color:#fff;
  border:none;
  position:relative;
  height:8%;
  font-size:1.6em;
  // padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  border-radius: 5px;
  // outline:none;
  &:hover{
    background:#fff;
    color:#1AAB8A;
  }
  `,
  text: styled.p`
    margin-bottom:2%;
    margin-left: 7%;
    font-size: large;
    
  `,
 
};

export default S;
