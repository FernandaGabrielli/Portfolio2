import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E966A0;
    --grey: #232125;
    --oldpurple: #6554AF;
    --purple: #9575DE;
    --oldpink: #CC7178;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--grey); /* Usando a variável */
    color: var(--oldPink); /* Usando a variável */
  }

  h1, h2, h3 {
    margin-bottom: 15px;
  }
`;

export default GlobalStyle;