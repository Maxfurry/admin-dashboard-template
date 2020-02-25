import css from "styled-jsx/css";

export default css.global`
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
  ul.sidebar-menu > li:first-child {
    margin-top: 30px;
  }
  ul.sidebar-menu > li:last-child {
    margin-bottom: 30px;
  }
  ul.sidebar-menu > li.dropdown:hover > ul.dropdown-menu {
    display: block;
  }
  ul.sidebar-menu > li.dropdown:hover > ul.dropdown-menu li.active > a {
    font-weight: 500 !important;
  }
  ul.sidebar-menu > li.dropdown.open:hover > ul.dropdown-menu li.active > a {
    font-weight: 550 !important;
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
    #sidebar:hover .sidebar-menu > li > a .title {
      display: inline-block;
    }
    #sidebar:hover .sidebar-menu li.dropdown .arrow {
      opacity: 1;
    }
    #sidebar:hover .sidebar-menu li.open > ul.dropdown-menu {
      display: block !important;
    }
  }

  @media screen and (max-width: 991px) {
    #sidebar {
      left: -99999px;
      width: 250px;
    }
  }
`;
