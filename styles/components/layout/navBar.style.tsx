import css from "styled-jsx/css";

export default css`
  nav.top-navbar {
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    display: block;
    margin-bottom: 0;
    padding: 0 10px;
    transition: all 0.2s ease;
    height: 70px;
    overflow-x: hidden;
  }
  nav.top-navbar .navbar-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .nav-left ul,
  .nav-right ul {
    list-style: none;
    position: relative;
    display: flex;
  }
  .nav-left ul > li > a,
  .nav-right ul > li > a {
    color: #72777a;
    display: block;
    cursor: pointer;
    line-height: 70px;
    min-height: 70px;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  .nav-left ul > li > a i,
  .nav-right ul > li > a i {
    font-size: 17px;
  }
  .nav-left ul > li > a:hover,
  .nav-left ul > li > a:focus,
  .nav-right ul > li > a:hover,
  .nav-right ul > li > a:focus {
    color: #313435;
    text-decoration: none;
  }

  .search-box .search-icon-close {
    display: none;
  }
  .search-box.active .search-icon {
    display: none;
  }
  .search-box.active .search-icon-close {
    display: inline-block;
  }
  .search-input {
    display: none;
  }
  .search-box.active ~ .search-input {
    display: inline-block;
  }
  .search-input input {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    font-size: 18px;
    height: 40px;
    margin-top: 12px;
    outline: none;
    padding: 5px;
  }
  .search-input input::-webkit-input-placeholder {
    color: #a6aaac;
    font-style: italic;
  }
  .search-input input:-moz-placeholder {
    color: #a6aaac;
    font-style: italic;
  }
  .search-input input::-moz-placeholder {
    color: #a6aaac;
    font-style: italic;
  }
  .search-input input:-ms-input-placeholder {
    color: #a6aaac;
    font-style: italic;
  }

  .nav-right .notifications {
    position: relative;
  }
  .nav-right .notifications .counter {
    background-color: #ff3c7e;
    border-radius: 50px;
    color: #fff;
    font-size: 10px;
    line-height: 1;
    padding: 3px 5.5px;
    position: absolute;
    right: 6px;
    top: 12px;
  }
  .nav-right li.profileAvatar a {
    box-sizing: border-box;
    display: flex !important;
    justify-content: flex-start;
    flex-flow: row wrap;
    height: auto;
    max-width: 100%;
    margin: 0;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: -5px;
  }
  .nav-right .profileAvatar a .profileImg {
    margin-right: 10px;
    display: flex;
    justify-content: center;
  }
  .nav-right .profileAvatar a .profileImg > img {
    width: 2rem;
    border-radius: 50%;
  }
  .nav-right .profileAvatar a .profileName {
    line-height: 70px;
  }
  .nav-right .profileAvatar a .profileName span {
    font-size: 0.87rem;
    color: #313435;
    white-space: nowrap;
  }

  @media screen and (max-width: 991px) {
    .nav-left ul > li > a,
    .nav-right ul > li > a {
      padding: 0 10px;
    }
  }
`;
