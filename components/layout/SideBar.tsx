import { FC } from "react";

interface Props {

};

const SideBar: FC<Props> = () => {
  return (
    <div id="sidebar">
      <div className="sidebar-logo">
        Company Logo and Name
      </div>
      <div className="sidebar-menu">
        Sidebar Menu
      </div>
    </div>
  );
}

export default SideBar;