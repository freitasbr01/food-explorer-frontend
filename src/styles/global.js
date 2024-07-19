import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --bg-color1: ${({ theme }) => theme.COLORS.GRADIENT_100};
    --bg-color-cover: ${({ theme }) => theme.COLORS.NONE};
    --bg-color-ingredients: ${({ theme }) => theme.COLORS.LIGHT_300};
    --bg-color-input1: ${({ theme }) => theme.COLORS.LIGHT_200};
    --bg-color-input2: ${({ theme }) => theme.COLORS.LIGHT_200};
    --bg-gradient-right: ${({ theme }) => theme.COLORS.NONE};
    --bg-gradient-left: ${({ theme }) => theme.COLORS.NONE};
    --icon-color1: ${({ theme }) => theme.COLORS.LIGHT_700};
    --border-color-card: ${({ theme }) => theme.COLORS.LIGHT_300};
    --arrow-color: ${({ theme }) => theme.COLORS.DARK_100};

    --text-color1: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color2: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color3: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color4: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color5: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color6: ${({ theme }) => theme.COLORS.DARK_100};

    --text-color-cake1: ${({ theme }) => theme.COLORS.DARK_100};
    --text-color-cake2: ${({ theme }) => theme.COLORS.DARK_100};
  }

  [data-theme='dark'] {
    --bg-color1: ${({ theme }) => theme.COLORS.DARK_400};
    --bg-color-cover: ${({ theme }) => theme.COLORS.GRADIENT_200};
    --bg-color-ingredients: ${({ theme }) => theme.COLORS.DARK_1000};
    --bg-color-input1: ${({ theme }) => theme.COLORS.DARK_800};
    --bg-color-input2: ${({ theme }) => theme.COLORS.DARK_900};
    --bg-gradient-right: ${({ theme }) => theme.COLORS.GRADIENT_RIGHT};
    --bg-gradient-left: ${({ theme }) => theme.COLORS.GRADIENT_LEFT};
    --icon-color1: ${({ theme }) => theme.COLORS.LIGHT_100};
    --border-color-card: ${({ theme }) => theme.COLORS.LIGHT_700};
    --arrow-color: ${({ theme }) => theme.COLORS.LIGHT_100};

    --text-color1: ${({ theme }) => theme.COLORS.LIGHT_100};
    --text-color2: ${({ theme }) => theme.COLORS.LIGHT_200};
    --text-color3: ${({ theme }) => theme.COLORS.LIGHT_300};
    --text-color4: ${({ theme }) => theme.COLORS.LIGHT_400};
    --text-color5: ${({ theme }) => theme.COLORS.LIGHT_500};
    --text-color6: ${({ theme }) => theme.COLORS.LIGHT_600};

    --text-color-cake1: ${({ theme }) => theme.COLORS.CAKE_100};
    --text-color-cake2: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color1);
    background: var(--bg-color1);
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