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
    background-color: ${({ theme }) => theme.colors.tertiary}
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: default;
  }
`;
export default GlobalStyle;
