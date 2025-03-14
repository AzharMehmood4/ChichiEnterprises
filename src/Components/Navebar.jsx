import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaWhatsapp,
} from "react-icons/fa";

const menuLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Our Services", path: "/ourServices" },
  { id: 3, name: "Umrah Packages", path: "/umrahPackages" },
  { id: 4, name: "Hajj Packages", path: "/hajjPackages" },
  { id: 5, name: "About Us", path: "/about" },
  { id: 6, name: "Contact Us", path: "/contactUs" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 border-b shadow-sm relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-semibold text-gray-700">
          <Link to="/">
            <img className="w-16 h-auto" src={Logo} alt="ChiChi Enterprises" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-700">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="hover:text-blue-600">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 text-gray-500">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <a href="www.https://wa.me/+923469338816">
            <FaWhatsapp className="hover:text-pink-500 cursor-pointer" />
          </a>
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden text-gray-500 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </div>

        {/* Slide-in Menu (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-full bg-gray-200 w-64 shadow-lg transform z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 text-xl"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4 p-4 text-gray-700">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-blue-600"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons (Mobile) */}
          <div className="flex justify-center space-x-4 mt-6 text-gray-500">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaWhatsapp className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
