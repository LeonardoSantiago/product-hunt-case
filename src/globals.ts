import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: 'Segoe UI', sans-serif;
    }
    #root {
        display: flex;
        justify-content: center;
        height: 100%;
        min-height: 100vh;
    }
`