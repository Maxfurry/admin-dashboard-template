import { useState, useEffect, FC } from "react";
import SideMenuItem from "./SideMenuItem";
import SideMenuDropdown from "./SideMenuDropdown";

import sidebarMenuStyle from "../../styles/components/layout/sidebarMenu.style";

const initalState = {
  dashboard: false,
  email: false,
  compose: false,
  calendar: false,
  chat: false,
  charts: false,
  forms: false,
  elements: false,
  tables: false,
  maps: false,
  pages: false,
  error: false
};

const SidebarMenu: FC = () => {
  const [sideBarItems, setSideBarItemsState] = useState(initalState);

  async function setSideMenuState(item: string): Promise<void> {
    const setValue = {
      ...initalState,
      [item]: true
    };
    await setSideBarItemsState(setValue);
  }

  useEffect(() => {
    setSideMenuState("dashboard");
  }, []);

  return (
    <>
      <ul className="sidebar-menu">
        <SideMenuItem
          title="Dashboard"
          icon="c-blue-500 ti-home"
          isActive={sideBarItems.dashboard}
          setSideMenuState={() => setSideMenuState("dashboard")}
        />
        <SideMenuItem
          title="Email"
          icon="c-brown-500 ti-email"
          isActive={sideBarItems.email}
          setSideMenuState={() => setSideMenuState("email")}
        />
        <SideMenuItem
          title="Compose"
          icon="c-blue-500 ti-share"
          isActive={sideBarItems.compose}
          setSideMenuState={() => setSideMenuState("compose")}
        />
        <SideMenuItem
          title="Calendar"
          icon="c-deep-orange-500 ti-calendar"
          isActive={sideBarItems.calendar}
          setSideMenuState={() => setSideMenuState("calendar")}
        />
        <SideMenuItem
          title="Chat"
          icon="c-deep-purple-500 ti-comment-alt"
          isActive={sideBarItems.chat}
          setSideMenuState={() => setSideMenuState("chat")}
        />
        <SideMenuItem
          title="Charts"
          icon="c-indigo-500 ti-bar-chart"
          isActive={sideBarItems.charts}
          setSideMenuState={() => setSideMenuState("charts")}
        />
        <SideMenuItem
          title="Forms"
          icon="c-light-blue-500 ti-pencil"
          isActive={sideBarItems.forms}
          setSideMenuState={() => setSideMenuState("forms")}
        />
        <SideMenuItem
          title="Elements"
          icon="c-pink-500 ti-palette"
          isActive={sideBarItems.elements}
          setSideMenuState={() => setSideMenuState("elements")}
        />

        <SideMenuDropdown
          title="Tables"
          icon="c-orange-500 ti-layout-list-thumb"
          items={["Basic Table", "Data Table"]}
          isActive={sideBarItems.tables}
          setSideMenuState={() => setSideMenuState("tables")}
        />
        <SideMenuDropdown
          title="Maps"
          icon="c-purple-500 ti-map"
          items={["Google Map", "Vector Map"]}
          isActive={sideBarItems.maps}
          setSideMenuState={() => setSideMenuState("maps")}
        />
        <SideMenuDropdown
          title="Pages"
          icon="c-teal-500 ti-view-list-alt"
          items={["Blank", "Sign In", "Sign Up"]}
          isActive={sideBarItems.pages}
          setSideMenuState={() => setSideMenuState("pages")}
        />
        <SideMenuDropdown
          title="Error Pages"
          icon="c-red-500 ti-files"
          items={["404", "500", "200", "300"]}
          isActive={sideBarItems.error}
          setSideMenuState={() => setSideMenuState("error")}
        />
      </ul>
      <style jsx>{sidebarMenuStyle}</style>
    </>
  );
};

export default SidebarMenu;
