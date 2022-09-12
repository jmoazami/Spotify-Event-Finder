import { createGlobalStyle } from 'styled-components/macro';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

  ${variables};

  html {
    box-sizing: border-box;
  }`
  export default GlobalStyle;