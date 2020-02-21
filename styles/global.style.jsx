import css from "styled-jsx/css";

export default css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial,
      sans-serif;
    line-height: 1.5;
  }

  body {
    overflow: hidden;
    font-size: 14px;
    color: #7c8184;
    letter-spacing: 0.2px;
  }
`;
