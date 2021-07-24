import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height:100%;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    height:100%;
  }

  #__next{
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    border:0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  span, p, label, input, textarea, select, button, div {
    font-size:1.4rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.4rem;
  }
`;

export default GlobalStyles;
