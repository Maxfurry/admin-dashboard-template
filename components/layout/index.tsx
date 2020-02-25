import { FC, ReactChild, useState, MouseEvent } from "react";
import Head from "next/head";

import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

import layoutStyle from "../../styles/components/layout/index.style";

interface Props {
  children: ReactChild;
  title?: string;
}

const Layout: FC<Props> = ({ children, title = "Dashboard" }) => {
  const [sidebarSwitch, setSidebarSwitchState] = useState(false);

  function sidebarToggle(e: MouseEvent): void {
    e.preventDefault();
    setSidebarSwitchState(!sidebarSwitch);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="themify-icons.css" />
        <link rel="stylesheet" href="font-awesome.css" />
      </Head>

      <div
        id="dashboard-layout"
        className={`${sidebarSwitch && "open-close-sidebar"}`}
      >
        <SideBar sidebarToggle={sidebarToggle} />

        <div id="page-component">
          <NavBar sidebarToggle={sidebarToggle} />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </div>
      <style jsx>{layoutStyle}</style>
    </>
  );
};

export default Layout;
