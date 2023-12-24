import { createGlobalStyle } from 'styled-components';
import Regular from '../fonts/Regular.ttf';
import Medium from '../fonts/Medium.ttf';
import Bold from '../fonts/Bold.ttf';

export const GlobalStyle = createGlobalStyle`
 :root {
    --primaryWhite: #FFFFFF;
    --primaryBlack: #2F2F2F;
    --primaryBlue: #407BFF;
    --secondaryGrey: #ECF2FF;
    --secondaryDarkGrey: #D7E3FF;
    --secondaryRed: #EF5050;
    --secondaryOrange: #FF9D43;
    --secondaryBlue: #9EBBFF;
  }
*{box-sizing: border-box}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 100%;
  padding-left: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 320px) {
        max-width: 320px;
        }
  
  @media screen and (min-width: 768px) {
        max-width: 768px;
        padding-left: 32px;
        padding-left: 32px;
        }

    @media screen and (min-width: 1440px) {
        max-width: 1440px;
        padding-left: 112px;
        padding-left: 112px;
    }
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
`;


