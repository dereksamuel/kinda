import styled, { ThemeProvider } from "styled-components";
import variables from "./variables";

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${variables.theme.fonts.primary};
  }
`;

export default function GeneralStyles({ children }) {
  return (
    <ThemeProvider theme={variables.theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
