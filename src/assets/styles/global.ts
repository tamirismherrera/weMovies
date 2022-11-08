import { colors } from "./variables";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
  }   

  body { 
    margin: 0;
    padding: 0;
    background: ${colors.blue700};
    
  }

  input,button, span,h1, { 
    
    font-style: normal;
 }
`;
