import React, { useState } from "react";
import { Dropdown, Menu ,message,Image} from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import profi from "../../../assets/profile.jpg"
import Sidebar from "../../Admin/AdminLayout/Sidebar";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const handleLogout = () => {
    message.success("Logged out successfully!");
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    window.location.reload();
  };


  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      {/* <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item> */}
      <Menu.Item key="2" onClick={handleLogout} icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-between items-center bg-[#544541]     h-20">
      {/* Left Side: Logo or Name */}

        <div className="md:hidden">
          <Sidebar/>
        </div>

      <div className="text-white text-xl font-semibold md:pl-3">
        Welcome, <span className="font-bold">Admin</span>
      </div>

      {/* Right Side: Profile with Dropdown */}
      <div className="flex items-center space-x-4 pr-3">
        <Image
          style={{ width: 40, height: 40 }}
          src={profi}
          onError={(e) => (e.target.src = profi)}
          alt="Profile"
          className="rounded-full object-cover w-12 h-12 border-2 border-gray-200"
        />
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <div className="text-white cursor-pointer">
            <span>Admin</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
