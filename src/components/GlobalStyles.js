import { createGlobalStyle } from 'styled-components';
import Regular from '../fonts/Regular.ttf';
import Medium from '../fonts/Medium.ttf';
import Bold from '../fonts/Bold.ttf';
import modernNormalize from 'modern-normalize/modern-normalize.css';

export const calculateLineHeight = (fontSize, lineHeight) => {
  return fontSize / lineHeight;
};

export const GlobalStyle = createGlobalStyle`
${modernNormalize}
 :root {
    --primaryWhite: #FFFFFF;
    --primaryBlack: #2F2F2F;
    --primaryBlue: #407BFF;
    --secondaryGrey: #ECF2FF;
    --secondaryDarkGrey: #D7E3FF;
    --secondaryRed: #EF5050;
    --secondaryOrange: #FF9D43;
    --secondaryBlue: #9EBBFF;


    --fontSizesTiny: 12px;
    --fontSizesSmall: 16px;
    --fontSizesMedium: 18px;
    --fontSizesLarge: 26px;

    --animationDuration: 0.3s;
    --animationCubicBezier: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: 250ms linear;
  overflow: auto;
}
.container {
  padding-top: 86px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  
  @media screen and (min-width: 320px) {
        max-width: 320px;
        }
  
  @media screen and (min-width: 768px) {
        max-width: 768px;
        padding-left: 32px;
        padding-right: 32px;
        }

    @media screen and (min-width: 1440px) {
        max-width: 1440px;
        padding-left: 112px;
        padding-right: 112px;
    }
}


.static-background {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
 
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
    text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

p {
  margin: 0;
}

h1, h2, h3, h4 {
margin: 0
}

  @font-face {
    font-family: 'Roboto-regular';
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${Bold}) format('truetype'),
    }

  .ReactModalPortal {
    position: relative;
    transition: opacity 350ms ease-in-out;
    z-index: 5;
  }
  .cross-btn {
    padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  background-color: var(--primaryWhite);

  &:hover {
    & svg {
      transform: rotate(-45deg) scale(1.1);
    }
  }
  }
  .cross-svg {
    fill: var(--primaryBlue);
  transform: rotate(45deg);
  width: 36px;
  height: 36px;
  transition: transform var(--animationCubicBezier);
  }




.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .custom-modal {
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 350ms ease-in-out, transform 350ms ease-in-out;

    &.ReactModal__Content--after-open {
      opacity: 1;
      transform: translateY(0);
    }

    &.ReactModal__Content--before-close {
      opacity: 0;
      transform: translateY(-50%);
    }
  }

  .custom-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 350ms ease-in-out;

    &.ReactModal__Overlay--after-open {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &.ReactModal__Overlay--before-close {
      background-color: transparent;
    }
  }

  button:disabled {
    cursor: not-allowed;
    filter: blur(2px);
    /* filter: grayscale(60%); */
  }
`;
