import { FC, MouseEvent, useState } from "react";

import navbarStyle from "../../styles/components/layout/navBar.style";

interface Props {
  sidebarToggle: (event: MouseEvent<HTMLElement>) => void;
}

const Navbar: FC<Props> = ({ sidebarToggle }) => {
  const [isSearchInputActive, setSearchInputstate] = useState(false);

  function searchToggle() {
    setSearchInputstate(!isSearchInputActive);
  }

  return (
    <>
      <nav className="top-navbar">
        <div className="navbar-container">
          <div className="nav-left">
            <ul>
              <li onClick={sidebarToggle}>
                <a id="sidebar-toggle" className="sidebar-toggle">
                  <i className="ti-menu"></i>
                </a>
              </li>
              <li
                className={`search-box ${isSearchInputActive && "active"}`}
                onClick={searchToggle}
              >
                <a className="search-toggle">
                  <i className="search-icon ti-search"></i>
                  <i className="search-icon-close ti-close"></i>
                </a>
              </li>
              <li className="search-input">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                />
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li className="notifications">
                <span className="counter">4</span>
                <a href="" data-toggle="dropdown">
                  <i className="ti-bell"></i>
                </a>
              </li>
              <li className="notifications">
                <span className="counter">3</span>
                <a href="" data-toggle="dropdown">
                  <i className="ti-email"></i>
                </a>
              </li>
              <li className="profileAvatar">
                <a href="">
                  <div className="profileImg">
                    <img
                      src="https://randomuser.me/api/portraits/men/10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="profileName">
                    <span>John Doe</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{navbarStyle}</style>
    </>
  );
};

export default Navbar;
