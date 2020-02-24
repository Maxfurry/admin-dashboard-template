import { FC } from "react";
import SideBarLogo from "./SideBarLogo";
interface Props {

};

const SideBar: FC<Props> = () => {
  return (
    <div id="sidebar">
      <SideBarLogo />
      <div className="sidebar-menu">
        Sidebar Menu
      </div>
    </div>
  );
}

export default SideBar;