import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}  
  
  html, body {
    font-family:  Noto Sans KR, Apple SD Gothic Neo, sans-serif;
    font-size : 12px;
    height : 100%;
    overflow: hidden;
    
  }

  body {
    margin : 0;
  }

  #root{
    height : 100%;    
  }
  
  a{
    text-decoration: none;
  }
  button, input{
    margin:0px;
    /* border: 1px; */
  }
`;
