import { createGlobalStyle } from "styled-components"
import { Black, White, Body1 } from "./utilities"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    h1 {
        margin: 0;
    }

    body {
        ${Body1}
        color: ${White};
        margin: 0;
        background: ${Black};

        &::before {
            content: '';
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            border-radius: inherit;
            background: linear-gradient(#F743B6,#FCC043);
        }
    }

    p {
        margin: 0;
    }

    html, 
    body {
        height: 100%;
        width: 100%;
    }

    #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
`
