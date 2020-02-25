import css from "styled-jsx/css";

export default css.global`
  #dashboard-layout {
    display: block;
    width: 100vw;
    height: 100vh;
  }
  #dashboard-layout a {
    text-decoration: none;
  }
  #dashboard-layout li {
    list-style-type: none;
  }
  #page-component {
    width: 100%;
    padding-left: 280px;
    transition: all 0.2s ease;
  }
  #page-component .main-content {
    padding: 85px 20px 20px;
    // Full view height minus height of both top navbar and footer
    min-height: calc(100vh - 140px);
    width: 100%;
    background-color: #f9fafb;
  }

  @media screen and (max-width: 991px) {
    #page-component {
      padding-left: 0;
    }

    .open-close-sidebar #sidebar {
      left: 0;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1439px) {
    #page-component {
      padding-left: 70px;
    }
    #sidebar .sidebar-logo {
      border-bottom: none;
    }
    #sidebar:hover .sidebar-logo {
      border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    }

    .open-close-sidebar #sidebar {
      width: 280px !important;
    }
    .open-close-sidebar #sidebar .sidebar-logo {
      border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    }
    .open-close-sidebar #page-component {
      padding-left: 280px;
    }
    .open-close-sidebar #sidebar .sidebar-menu > li > a .title {
      display: inline-block;
    }
    .open-close-sidebar #sidebar .sidebar-menu li.dropdown .arrow {
      opacity: 1;
    }
    .open-close-sidebar #sidebar .sidebar-menu li.open > ul.dropdown-menu,
    .is-collapsed.sidebar:hover .sidebar-inner .sidebar-menu li.open > ul.dropdown-menu {
      display: block !important;
    }
  }

  @media screen and (min-width: 1440px) {
    .open-close-sidebar #sidebar {
      width: 70px !important;
    }
    .open-close-sidebar #sidebar .sidebar-logo {
      border: none;
    }
    .open-close-sidebar #page-component {
      padding-left: 70px;
    }
    .open-close-sidebar #sidebar .sidebar-menu {
      overflow-x: hidden;
    }
    .open-close-sidebar #sidebar .sidebar-menu > li > a .title {
      display: none;
    }
    .open-close-sidebar #sidebar .sidebar-menu li.dropdown .arrow {
      opacity: 0;
    }
    .open-close-sidebar #sidebar .sidebar-menu li.dropdown.open ul.dropdown-menu {
      display: none !important;
    }

    .open-close-sidebar #sidebar:hover {
      width: 280px !important;
    }
    .open-close-sidebar #sidebar:hover .sidebar-logo {
      border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    }    
    .open-close-sidebar #sidebar:hover .sidebar-logo {
      border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
      padding: 0 20px;
    }
    .open-close-sidebar #sidebar:hover .sidebar-menu > li > a .title {
      display: inline-block;
    }
    .open-close-sidebar #sidebar:hover .sidebar-menu li.dropdown .arrow {
      opacity: 1;
    }
    .open-close-sidebar #sidebar:hover .sidebar-menu li.open > ul.dropdown-menu {
      display: block !important;
    }
  }
`;
