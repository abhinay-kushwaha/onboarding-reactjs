import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Footer Left - Company Info */}
        <div className="flex sm:justify-center ">
          <div>
            <h1 className="text-4xl font-bold mb-4">Fox Pilots</h1>
            <p className="transition-all duration-300 hover:text-[#ea7f3c]">Hyderabad Telangana 500073</p>
            <p className="transition-all duration-300 hover:text-[#ea7f3c]">+91 1234567892</p>
            <p className="transition-all duration-300 hover:text-[#ea7f3c]">hey@FoxPilots.in</p>
          </div>
        </div>

        {/* SHOP Section */}
        <div className="flex sm:justify-center ">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">SHOP</h2>
            <ul className="space-y-2 text-sm">
              {[
                // "WINTER ESSENTIALS 24 NEW",
                // "OVERSHIRTS",
                // "WINTER HOODIES",
                // "CO-ORDS",
                // "JOGGERS",
                // "SWEATPANTS",
                // "WINTER SWEATSHIRTS",
                // "Fox Pilots X SUNBURN",
                // "TOP WEAR",
                // "TEES",
                // "SHIRTS",
                // "HOODIES",
                // "TANKS",
                // "SWEATSHIRTS",
                // "KURTAS",
                // "BOMBER-JACKETS",
                // "CO-ORD SETS",
                // "BOTTOM WEAR",
                "JEANS",
                "TROUSERS",
              ].map((item, index) => (
                <li key={index} className="hover:text-[#ea7f3c] transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COMPANY Section */}
        <div className="flex sm:justify-center ">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", link: "/about-us" },
                { name: "Terms & Conditions", link: "/terms-conditions" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                // { name: "Return Policy", link: "/return-policy" },
                { name: "FAQs", link: "/faqs" },
              ].map((item, index) => (
                <li key={index} className="hover:text-[#ea7f3c] transition-colors duration-200">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOLLOW US Section */}
        <div className="flex sm:justify-center ">
          <div className="">
            <h2 className="text-lg font-bold mb-4">FOLLOW US ON</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-xl transition-all duration-300 hover:text-[#ea7f3c]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-xl transition-all duration-300 hover:text-[#ea7f3c]">
                <FaYoutube />
              </a>
              <a href="#" className="text-xl transition-all duration-300 hover:text-[#ea7f3c]">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl transition-all duration-300 hover:text-[#ea7f3c]">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl transition-all duration-300 hover:text-[#ea7f3c]">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="text-center mt-8">
        <h1 className="text-wrap text-lg">
          Developed with love by <strong>Abhinay</strong> © {currentYear}
        </h1>
        <p className="text-sm">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
