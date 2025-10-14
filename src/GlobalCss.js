import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }
    body{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        background-color: #000;
        color: #fafafa;
    }
    `;
