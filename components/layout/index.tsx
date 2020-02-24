import { FC, ReactChild } from "react";
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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="themify-icons.css" />
        <link rel="stylesheet" href="font-awesome.css" />
      </Head>

      <div id="dashboard-layout">
        <SideBar />

        <div id="page-component">
          <NavBar />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </div>
      <style jsx>{layoutStyle}</style>
    </>
  );
};

export default Layout;
