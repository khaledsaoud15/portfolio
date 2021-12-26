import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#fff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
`;
