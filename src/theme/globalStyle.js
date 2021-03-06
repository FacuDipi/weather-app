import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    height: 100vh;
  
    padding: 16px 0;
    position: relative;
}

    h1, h2, h3 {
        font-family: 'Montserrat', sans-serif;
    }
    a {
        text-decoration: none
    }
    
`;