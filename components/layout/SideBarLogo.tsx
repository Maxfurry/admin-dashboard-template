import { FC } from "react";
import Link from "next/link";

import sidebarLogoStyle from "../../styles/components/layout/sideBarLogo.style";

const Navbar: FC = () => {
  return (
    <>
      <div className="sidebar-logo">
        <div>
          <Link href="./">
            <a>
              <div className="logo">
                <img src="./logo.png" alt="" />
              </div>
              <div className="logo-text">
                <h5>PeerlessTech</h5>
              </div>
            </a>
          </Link>
        </div>

        <div className="mobile-toggle">
          <a href="" style={{ textDecoration: "none" }}>
            <i className="ti-arrow-circle-left"></i>
          </a>
        </div>
      </div>
      <style jsx>{sidebarLogoStyle}</style>
    </>
  );
};

export default Navbar;
