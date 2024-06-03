import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
  }

  input, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    outline: none;
  }


  button:hover, a:hover {
    filter: brightness(0.9);
  }

  button, a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
`