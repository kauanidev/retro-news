import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PT Serif', serif;
}

body {
  background-color: ${(props) => props.theme.background};
  background-image: url("https://www.transparenttextures.com/patterns/rice-paper-2.png");
  color: ${(props) => props.theme.text}
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'DM Serif Display', serif;
  text-transform: uppercase;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const BasePageContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 90px auto;

  @media (max-width: 450px) {
    margin: 50px auto;
  }
`;
