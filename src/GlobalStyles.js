import { createGlobalStyle } from "styled-components";
import DungGeunMo from "./fonts/DungGeunMo.woff";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "DungGeunMo";
        src: local("DungGeunMo"),
        url(${DungGeunMo}) format('woff');
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        user-select: none;
    }

    body {
        background-color: teal ;
        font-family: "DungGeunMo";
    }
`;

export default GlobalStyles;
