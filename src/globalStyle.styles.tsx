import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-family: 'Montserrat';
}
html,
body,
.root {
  height: 100%;
  background: #fff;
}
`;

