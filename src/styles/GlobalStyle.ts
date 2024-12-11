import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E966A0;
    --grey: #232125;
    --oldpurple: #6554AF;
    --purple: #9575DE;
    --oldpink: #CC7178;
    --snow: #E0E1D7;
    --dark:  #121212;
    --darkblue:  #282a36;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--grey); 
    color: var(--oldPink); 
  }

  h1, h2, h3 {
    margin-bottom: 15px;
  }


  html {
    scroll-behavior: smooth; 

`;


export default GlobalStyle;