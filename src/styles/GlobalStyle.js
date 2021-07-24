import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: -apple-system,BlinkMacSystemFont,NanumSquare,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    font-size : 1rem;
    height : 100%;
    overflow: hidden;
  }

  body {
    margin : 0;
  }

  #root{
    height : 100%;    
  }
`;
