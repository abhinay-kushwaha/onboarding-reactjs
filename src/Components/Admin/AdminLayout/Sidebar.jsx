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

  const menuItems = (
    <Menu className="w-full h-screen" mode="inline" openKeys={openKeys} onOpenChange={handleSubMenuChange}>
      <div className="sticky top-0 bg-gray-100 z-10">
        <Logo />
      </div>

      {/* Dashboard */}
      <Menu.Item key="/dashboard" icon={<AppstoreOutlined />}>
        <Link to="/dashboard" onClick={onClose}>
          Dashboard
        </Link>
      </Menu.Item>

      {/* Employee */}
      <Menu.Item key="/employee" icon={<AppstoreOutlined />}>
        <Link to="/employee" onClick={onClose}>
          Employee
        </Link>
      </Menu.Item>

      {/* Settings Submenu */}
      <Menu.SubMenu key="/employee/settings" icon={<SettingOutlined />} title="Settings">
        <Menu.Item key="/employee/settings/manage-my-leaves">
          <Link to="/employee/settings/manage-my-leaves" onClick={onClose}>
            My Leaves
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <>
      <Button className="sidebar-toggle text-xl relative -top-0 h-10 w-10" onClick={showDrawer}>
        <AppstoreOutlined className="relative -top-0 -left-2 text-2xl" />
      </Button>
      <Drawer title="OZONE" placement="left" closable onClose={onClose} visible={drawerVisible}>
        {menuItems}
      </Drawer>
      <div className="sidebar-desktop overflow-x-scroll h-screen">{menuItems}</div>
    </>
  );
};

export default Sidebar;
