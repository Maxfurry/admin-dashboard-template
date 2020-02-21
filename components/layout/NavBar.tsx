import { FC } from "react";

import navbarStyle from "../../styles/components/layout/navBar.style";

const Navbar: FC = () => {
  return (
    <>
      <nav className="top-navbar">
        <div className="navbar-container">
          <div className="nav-left">
            navleft
          </div>
          <div className="nav-right">
            navright
          </div>
        </div>
      </nav>
      <style jsx>{navbarStyle}</style>
    </>
  );
};

export default Navbar;
