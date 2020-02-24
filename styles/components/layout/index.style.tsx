import css from "styled-jsx/css";

export default css.global`
  #dashboard-layout {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
  #sidebar {
    background-color: #fff;
    transition: all 0.2s ease;
    width: 280px;
    z-index: 1000;
    border-right: 1px solid rgba(0, 0, 0, 0.0625);
  }
  #sidebar .sidebar-menu {
    padding: 10px;
  }
  #page-component {
    width: 100%;
    transition: all 0.2s ease;
  }
  #page-component .main-content {
    padding: 85px 20px 20px;
    // Full view height minus height of both top navbar and footer
    min-height: calc(100vh - 140px);
    width: 100%;
    background-color: #f9fafb;
  }
`;
