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
    font-weight: 400;
  }

  //////////////
  .c-blue-500 {
    color: #2196f3 !important;
  }
  .c-brown-500 {
    color: #795548 !important;
  }
  .c-deep-orange-500 {
    color: #ff5722 !important;
  }
  .c-deep-purple-500 {
    color: #673ab7 !important;
  }
  .c-indigo-500 {
    color: #3f51b5 !important;
  }
  .c-light-blue-50 {
    color: #e1f5fe !important;
  }
  .c-pink-500 {
    color: #e91e63 !important;
  }
  .c-orange-500 {
    color: #ff9800 !important;
  }
  .c-purple-500 {
    color: #9c27b0 !important;
  }
  .c-red-500 {
    color: #f44336 !important;
  }
  .c-teal-500 {
    color: #009688 !important;
  }
`;
