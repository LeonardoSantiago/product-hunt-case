import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: 'Segoe UI', sans-serif;
        overflow-y: none;
    }
    #root {
        display: flex;
        justify-content: center;
        height: auto;
        min-height: 100vh;
    }
`