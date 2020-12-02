import styled from 'styled-components';

const S = {
  container: styled.button`
  background:#20997d;
  color: #fff;
  border:none;
  position:relative;
  height:6%;
  // padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  border-radius: 12px;
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
