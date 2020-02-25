import { useState, FC, MouseEvent } from "react";

import sidebarMenuItemStyle from "../../styles/components/layout/sidebarMenuItem.style";
import sidebarMenuDropdownStyle from "../../styles/components/layout/sidebarMenuDropdown.style";

interface Props {
  title: string;
  icon: string;
  items: Array<string>;
  isActive: boolean;
  setSideMenuState: () => void;
}

const SideMenuDropdown: FC<Props> = ({
  title,
  icon,
  items,
  isActive,
  setSideMenuState
}) => {
  const [dropdownIndex, setDropdownActiveIndex] = useState(0);
  const [isDropdownOpen, setDropdownState] = useState(false);
  const [hover, setHoverState] = useState(false);

  function makeItemActive(e: MouseEvent): void {
    e.preventDefault();
    setSideMenuState();
    setDropdownState(true);
    setHoverState(true);
  }

  function makeDrop(e: MouseEvent, index: number): void {
    e.preventDefault();
    setDropdownActiveIndex(index);
  }

  function handleOnMouseHover(): void {
    if (isActive && !hover) {
      return setDropdownState(false);
    }

    setDropdownState(true);
  }

  function handleOnMouseLeave(): void {
    if (!isActive) {
      return setDropdownState(false);
    }

    if (isActive && !hover) {
      setDropdownState(false);
    }
  }

  function toggleDropdown(e: MouseEvent): void {
    e.stopPropagation();
    setDropdownState(!isDropdownOpen);
    setHoverState(!hover);
  }

  return (
    <>
      <li
        className={`dropdown ${isActive ? "active" : ""} ${
          isDropdownOpen ? "open" : ""
        }`}
        onClick={makeItemActive}
        onMouseOver={handleOnMouseHover}
        onMouseLeave={handleOnMouseLeave}
      >
        <a className="dropdown-toggle">
          <span className="icon-holder">
            <i className={icon}></i>
          </span>
          <span className="title">{title}</span>
          <span className="arrow" onClick={toggleDropdown}>
            <i className="ti-angle-right" />
          </span>
        </a>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            {items.map((item, i) => (
              <li
                key={i}
                className={`${i == dropdownIndex && "active"}`}
                onClick={e => makeDrop(e, i)}
              >
                <a href="./">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
      <style jsx>{sidebarMenuItemStyle}</style>
      <style jsx>{sidebarMenuDropdownStyle}</style>
    </>
  );
};

export default SideMenuDropdown;
