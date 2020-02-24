import css from "styled-jsx/css";

export default css`
  .sidebar-logo {
    border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
    transition: all 0.2s ease;
    display: flex;
    height: 70px;
    padding: 0 20px;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .sidebar-logo div > a {
    display: flex;
    height: auto;
    flex: 1 1 auto;
    align-items: center;
    text-decoration: none;
  }
  .sidebar-logo a .logo {
    background-position: center left;
    background-repeat: no-repeat;
    display: flex;
    width: 100%;
  }
  .sidebar-logo a .logo img {
    width: 40px;
    height: 40px;
  }
  .sidebar-logo a .logo-text {
    color: #313435;
    margin-left: 15px;
  }
  .sidebar-logo a .logo-text h5 {
    line-height: 1;
    letter-spacing: 0.5px;
    font-size: 1.09375rem;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    font-weight: 500;
  }
  .sidebar-logo .mobile-toggle {
    display: none;
  }
  .sidebar-logo .mobile-toggle a {
    text-align: right;
    font-size: 18px;
    line-height: 64px;
    color: #72777a;
    text-decoration: none;
  }

  @media screen and (max-width: 991px) {
    .sidebar-logo .mobile-toggle {
      display: inline-block;
    }
  }
`;
