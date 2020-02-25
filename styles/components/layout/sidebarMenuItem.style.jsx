import css from "styled-jsx/css";

export default css`
  li {
    position: relative;
  }
  li a {
    color: #72777a;
    transition: all 0.3s ease;
  }
  li > a {
    display: block;
    font-size: 15px;
    font-weight: 500;
    padding: 5px 15px;
    position: relative;
    white-space: nowrap;
  }
  li > a .icon-holder {
    border-radius: 6px;
    display: inline-block;
    font-size: 17px;
    height: 35px;
    left: 0;
    line-height: 35px;
    margin-right: 14px;
    position: relative;
    text-align: center;
    transition: all 0.3s ease;
    width: 35px;
  }
  li a:hover,
  li a:focus,
  li.active > a {
    color: #313435;
    text-decoration: none;
    font-weight: 550;
  }
  li a:hover .icon-holder,
  li a:focus .icon-holder {
    color: #0f9aee;
  }

  @media screen and (min-width: 992px) and (max-width: 1439px) {
    li > a .title {
      display: none;
    }
  }
`;
