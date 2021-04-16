import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif; 
  }

  body {
    background: #E5e5e5e5;
  }

  strong {
    color: #CA1240;
    font-weight: 500;
  }

  span {
    color: #A1A1A1;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

`;