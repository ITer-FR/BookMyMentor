import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: Roboto, sans-serif;
    font-size: ${({ theme }) => theme.font_size.m};
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => (theme.colors.tertiary === '#1E1F2F' ? theme.colors.primary : 'black')};
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: default;
  }
  ul {
    list-style: none;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  a {
    text-decoration:none; 
  }
`;
export default GlobalStyle;
