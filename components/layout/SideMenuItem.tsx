import { useEffect, FC, MouseEvent } from "react";
import sidebarMenuItemStyle from "../../styles/components/layout/sidebarMenuItem.style";

interface Props {
  title: string;
  icon: string;
  isActive: boolean;
  setSideMenuState: () => void;
}

const SideMenuItem: FC<Props> = ({
  title,
  icon,
  isActive,
  setSideMenuState
}) => {
  function makeItemActive(e: MouseEvent): void {
    e.preventDefault();
    setSideMenuState();
  }

  useEffect(() => {}, [isActive]);

  return (
    <>
      <li
        className={`${isActive ? "active" : "no-active"}`}
        onClick={makeItemActive}
      >
        <a href="./">
          <span className="icon-holder">
            <i className={icon} />
          </span>
          <span className="title">{title}</span>
        </a>
      </li>
      <style jsx>{sidebarMenuItemStyle}</style>
    </>
  );
};

export default SideMenuItem;
