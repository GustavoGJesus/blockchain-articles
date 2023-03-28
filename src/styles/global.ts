import { css } from "@emotion/react";

export const MediaQuerys = {
  sm: "@media (max-width: 768px)",
  md: "@media (max-width: 1024px)",
};

export const GlobalStyles = css`
  :root {
    --white: #d8d8d9;
    --black: #0e111c;
    --red: #cb3837;

    --green-800: #01501e;
    --green-600: #aafe2c;
    --green-300: #F9EED6;
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
    background: var(--green-300);
    color: var(--green-800);
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;
