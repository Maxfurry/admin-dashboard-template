import css from "styled-jsx/css";

export default css`
  nav.top-navbar {
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    display: block;
    margin-bottom: 0;
    padding: 0;
    transition: all 0.2s ease;
    z-index: 800;
  }
  nav.top-navbar .navbar-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 30px;
  }
`;
