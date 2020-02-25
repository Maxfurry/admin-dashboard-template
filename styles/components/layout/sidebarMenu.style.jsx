import css from "styled-jsx/css";

export default css`
  .sidebar-menu {
    border-right: 1px solid rgba(0, 0, 0, 0.0625);
    height: calc(100vh - 65px);
    list-style: none;
    margin: 0;
    overflow: auto;
    padding: 0;
    position: relative;
  }
  .sidebar-menu::after {
    display: block;
    clear: both;
    content: "";
  }

  @media screen and (min-width: 992px) and (max-width: 1439px) {
    .sidebar-menu {
      overflow-x: hidden;
    }
  }
`;
