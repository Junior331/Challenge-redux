import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/open-sans-v13-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Open Sans'), local('OpenSans'),
       url('../fonts/open-sans-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/open-sans-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/open-sans-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/open-sans-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/open-sans-v13-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
  
  html{
    height: 100%;
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    width: 100%;
    color: #000;
    height: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    font-family: 'Titillium Web', sans-serif;
    flex-direction: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    -moz-osx-font-smoothing: grayscale;
  }

 #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
