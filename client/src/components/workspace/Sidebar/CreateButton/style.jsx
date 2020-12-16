import styled from 'styled-components';

const S = {
  container: styled.button`
  /* background:#131236;
  color:#20997d; */
  background:#5cb85c;
  color:white;
  border:none;
  position:relative;
  height:6%;
  // padding:0 2em;
  cursor:pointer;
  transition:300ms ease all;
  border-radius: 5px;
  // outline:none;
  &:hover{
    /* background:#fff;
    color:#1AAB8A; */
    background:#449d44;
    color:white;
  }
  `,
  text: styled.p`
    margin-bottom:0rem;
    margin-left: 0.3rem;
    font-size: large;
    
  `,
 
};

export default S;
