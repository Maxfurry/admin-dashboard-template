import css from "styled-jsx/css";

export default css`
  #sidebar {
    background-color: #fff;
    bottom: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: all 0.2s ease;
    width: 280px;
    z-index: 1000;
    border-right: 1px solid rgba(0, 0, 0, 0.0625);
  }
  #sidebar .sidebar-menu {
    padding: 10px;
  }

  @media screen and (max-width: 991px) {
    #sidebar {
      left: -99999px;
      width: 250px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1439px) {
    #sidebar {
      width: 70px;
    }
    #sidebar:hover {
      width: 280px;
    }
  }

  @media screen and (max-width: 991px) {
    #sidebar {
      left: -99999px;
      width: 250px;
    }
  }
`;
