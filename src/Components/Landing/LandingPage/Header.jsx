import React from "react";
import "../../../App.css";
import logo from "../../../assets/profile.jpg";
import logosmall from "../../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow bg-[#544541] h-20">
      <div className="flex justify-between items-center p-2 sm:px-7 px-3">
        <img className="hidden sm:block sm:h-16 rounded-full" src={logo} alt="logo" />
        <img className="sm:hidden h-16" src={logosmall} alt="logo" />
        <div className="flex justify-center items-center gap-4 font-semibold text-lg">
          <Link className="text-sm sm:text-lg" to="/logIn">
            Login
          </Link>
          <Link to="/signUp" className="  text-white text-sm rounded-md p-2 px-3 button3d">
            {" "}
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
