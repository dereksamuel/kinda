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

  .slick-dots {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style-type: none;
  }

  .slick-dots li button:before {
    color: ${variables.theme.colors.black};
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: ${variables.theme.colors.radiant};
  }

  .slick-dots li button:hover:before, .slick-dots li button:focus:before {
    color: ${variables.theme.colors.radiant};
  }

  .slick-next {
    right: 50px;
    width: 25px;
    z-index: 1;
    height: 40px;
  }

  .slick-prev {
    left: 50px;
    z-index: 1;
    width: 25px;
    height: 40px;
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
