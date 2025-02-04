import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/oneFOX.png";
import logosmall from "../../../assets/oneFOX.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("login") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  // User menu options (visible only if logged in)
  const menu = (
    <div className="bg-white shadow-lg rounded-md p-2">
      {isLoggedIn ? (
        <>
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
            Profile
          </Link>
          <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
            Orders
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("login"); // Logout user
              setIsLoggedIn(false);
              navigate("/login");
            }}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
          >
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="block px-4 py-2 w-full text-left hover:bg-gray-100">
          Login
        </button>
      )}
    </div>
  );

  // Handle cart click
  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  return (
    <header className="bg-white shadow-md   sticky top-0 z-50">
      <div className="flex justify-between items-center p-2 sm:p-7 sm:px-7 px-3">
        {/* Mobile Menu Button */}
        <button className="text-gray-700 text-2xl xl:hidden" onClick={() => setMenuOpen(true)}>
          <MenuOutlined />
        </button>
        {/* Categories (Hidden on Mobile) */}
        <nav className="hidden xl:flex gap-6 text-gray-700 font-medium">
          <Link to="/men" className="hover:text-[#db8048]">
            Winter Essentials 24 ᴺᴱᵂ
          </Link>
          <Link to="/women" className="hover:text-[#db8048]">
            Fox Pilots X SUNBURN
          </Link>
          <Link to="/kids" className="hover:text-[#db8048]">
            Top Wear Bottom Wear
          </Link>
          <Link to="/kids" className="hover:text-[#db8048]">
            Bottom Wear
          </Link>
        </nav>

        <Link to="/" className="flex items-center justify-center gap-2">
          <h1 className="md:text-5xl text-3xl font-extrabold text-[#d56a25] font-poppins tracking-wide">Fox Pilots</h1>
        </Link>

        {/* Drawer for Mobile Menu */}
        <Drawer title="Categories" placement="left" closable onClose={() => setMenuOpen(false)} open={menuOpen}>
          <nav className="flex flex-col gap-4">
            <Link to="/men" className="text-lg font-medium hover:text-[#db8048]" onClick={() => setMenuOpen(false)}>
              Winter Essentials 24 ᴺᴱᵂ
            </Link>
            <Link to="/women" className="text-lg font-medium hover:text-[#db8048]" onClick={() => setMenuOpen(false)}>
              Fox Pilots X SUNBURN
            </Link>
            <Link to="/kids" className="text-lg font-medium hover:text-[#db8048]" onClick={() => setMenuOpen(false)}>
              Top Wear
            </Link>
            <Link to="/kids" className="text-lg font-medium hover:text-[#db8048]" onClick={() => setMenuOpen(false)}>
              Bottom Wear
            </Link>
          </nav>
        </Drawer>

        {/* User & Cart Section */}
        <div className="flex items-center gap-6">
          {/* User Profile Dropdown */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <div className="cursor-pointer text-gray-700 text-xl">
              <UserOutlined />
            </div>
          </Dropdown>

          {/* Cart Icon */}
          <Badge count={2} showZero>
            <ShoppingCartOutlined className="text-2xl text-gray-700 cursor-pointer" onClick={handleCartClick} />
          </Badge>

          <Link to="/" className="flex items-center justify-center gap-2">
            {/* <h1 className="md:text-4xl text-2xl font-bold text-[#d56a25]">Fox Pilots</h1> */}
            <img src={logo} className="hidden sm:block sm:h-14 rounded-full mx-auto" alt="E-Commerce Logo" />
            <img className="sm:hidden h-16 mx-auto" src={logosmall} alt="E-Commerce Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
