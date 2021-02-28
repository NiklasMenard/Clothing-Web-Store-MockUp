import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    font-family: 'Roboto Slab', serif;
    font-size: 1.5rem;
  }
  h1, h2, h3 {
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
  button {
    border: none;
    background-color: inherit;
    font-family: inherit;
    font-size: 1.5rem;
  }
`;
export default GlobalStyle;
