import styled from 'styled-components';

const S = {
  container: styled.button`
  background:#131236;
  color:#20997d;
  border:none;
  position:relative;
  height:6%;
  // padding:0 2em;
  cursor:pointer;
  transition:300ms ease all;
  border-radius: 5px;
  // outline:none;
  &:hover{
    background:#fff;
    color:#1AAB8A;
  }
  `,
  text: styled.p`
    margin-bottom:0rem;
    margin-left: 7%;
    font-size: large;
    
  `,
 
};

export default S;
