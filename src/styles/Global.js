import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --border-radius-1: 36px;
        --border-radius-2: 16px;
        --border-radius-3: 8px;
    }
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        display: flex;
        place-items: center;
        background-color: #A9E3CD;
    }
    #root {
        width: 100%;
        min-height: 100vh;
        display: grid;
        place-content: center;
        font-family: 'Roboto Flex', sans-serif;
    }
`;

export default GlobalStyles;
