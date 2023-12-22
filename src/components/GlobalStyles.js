import { createGlobalStyle } from 'styled-components';
import Regular from '../fonts/Regular.ttf'
import Medium from '../fonts/Medium.ttf'
import Bold from '../fonts/Bold.ttf'


const GlobalStyle = createGlobalStyle`


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
 //delete import 
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
  margin: 0;
}
 
`;

export default GlobalStyle;