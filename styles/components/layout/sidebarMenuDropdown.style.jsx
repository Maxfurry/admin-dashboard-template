import css from "styled-jsx/css";

export default css`
  .dropdown-toggle::after {
    display: none;
  }
  li.dropdown .icon-holder,
  li.dropdown .title,
  li.dropdown .arrow {
    cursor: pointer;
  }
  li.dropdown .arrow {
    font-size: 10px;
    line-height: 40px;
    position: absolute;
    right: 30px;
    transition: all 0.05s ease-in;
  }
  li.dropdown.open > a {
    color: #313435;
  }
  li.dropdown.open > a .icon-holder {
    color: #0f9aee;
  }
  li.dropdown.open > a > .arrow {
    transform: rotate(90deg);
  }
  li.dropdown.open > .dropdown-menu {
    display: block;
  }
  li.dropdown.open > .dropdown-menu .dropdown-menu {
    padding-left: 20px;
  }
  li.dropdown.open > .dropdown-menu .arrow {
    line-height: 25px;
  }
  li.dropdown ul.dropdown-menu {
    display: none;
    background-color: #f9fafb;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    float: none;
    padding-left: 50px;
    padding-top: 0;
    position: relative;
    width: 100%;
  }
  li.dropdown ul.dropdown-menu > li > a {
    display: block;
    padding: 10px 15px;
  }
  li.dropdown ul.dropdown-menu > li > a:hover,
  li.dropdown ul.dropdown-menu > li > a:focus {
    background-color: transparent;
    color: #313435;
  }
  li.dropdown ul.dropdown-menu > li.active a {
    color: #313435;
  }

  @media screen and (max-width: 991px) {
    li.dropdown .arrow {
      right: 25px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1439px) {
    li.dropdown .arrow {
      opacity: 0;
    }
    li.dropdown.open ul.dropdown-menu {
      display: none !important;
    }
  }
`;
