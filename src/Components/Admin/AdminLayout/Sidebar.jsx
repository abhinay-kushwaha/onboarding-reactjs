import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../../Common/Inner/Logo";
import "./Sidebar.css";

const Sidebar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  const handleSubMenuChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const handleMenuClick = () => {
    setOpenKeys([]); // Close all submenus
    setDrawerVisible(false); // Optionally close the drawer if in mobile view
  };

  const menuItems = (
    <Menu
      className="w-full h-screen"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleSubMenuChange}
    >
      <div className="sticky top-0 bg-gray-100 z-10">
        <Logo />
      </div>

      {/* Dashboard */}
      <Menu.Item key="/admin/dashboard" icon={<AppstoreOutlined />}>
        <Link to="/admin/dashboard" onClick={handleMenuClick}>
          Dashboard
        </Link>
      </Menu.Item>

      {/* Task */}
      <Menu.Item key="/admin/projects-status" icon={<AppstoreOutlined />}>
        <Link to="/admin/projects-status" onClick={handleMenuClick}>
          Project Status
        </Link>
      </Menu.Item>

      {/* Settings Submenu */}
      <Menu.SubMenu
        key="/admin/settings"
        icon={<SettingOutlined />}
        title="Settings"
      >
        <Menu.Item key="/admin/settings/profile">
          <Link to="/admin/settings/profile"  >
          Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/settings/dark-theme">
          <Link to="/admin/settings/dark-theme"  >
          Dark Theme
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/settings/wow">
          <Link to="/admin/settings/wow" >
           Wow
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <>
      <Button
        className="sidebar-toggle text-xl relative -top-0 h-10 w-10"
        onClick={showDrawer}
      >
        <AppstoreOutlined className="relative -top-0 -left-2 text-2xl" />
      </Button>
      <Drawer
        title="OZONE"
        placement="left"
        closable
        onClose={onClose}
        visible={drawerVisible}
      >
        {menuItems}
      </Drawer>
      <div className="sidebar-desktop overflow-x-scroll h-screen">
        {menuItems}
      </div>
    </>
  );
};

export default Sidebar;
