import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    min-height: 100vh;
  }

  :root {
    --header-height: 100px;
    --aside-width: 100px;
    --footer-height: 50px;
}
`

export default GlobalStyle