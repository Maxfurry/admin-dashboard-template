import { FC, MouseEvent } from "react";
import SideBarLogo from "./SideBarLogo";
import SideBarMenu from "./SideBarMenu";

import sideBarStyle from "../../styles/components/layout/sideBar.style";

interface Props {
  sidebarToggle: (event: MouseEvent<HTMLElement>) => void;
}

const SideBar: FC<Props> = ({ sidebarToggle }) => {
  return (
    <>
      <div id="sidebar">
        <SideBarLogo sidebarToggle={sidebarToggle} />
        <SideBarMenu />
      </div>
      <style jsx>{sideBarStyle}</style>
    </>
  );
};

export default SideBar;
