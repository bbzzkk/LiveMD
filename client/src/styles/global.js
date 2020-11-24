import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    min-width: 1366px;
  }
  body :: -webkit-scrollbar {
    width : 0px;
  }
  a { 
    text-decoration: none; 
  }

  img {
    border: 0; 
  }

  ol, ul {
    list-style: none;
  }

`;

export default GlobalStyle;
