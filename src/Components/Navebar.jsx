import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="text-xl font-bold text-gray-700">
          TravelEgency
        </div>

        {/* Center Section - Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Travel</li>
          <li className="hover:text-blue-600 cursor-pointer">Eat</li>
          <li className="hover:text-blue-600 cursor-pointer">Relax</li>
          <li className="hover:text-blue-600 cursor-pointer">Videos</li>
        </ul>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 text-gray-500">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-blue-600 cursor-pointer" />
          <FaPinterestP className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden flex justify-center mt-2">
        <ul className="space-x-4 flex text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Travel</li>
          <li className="hover:text-blue-600 cursor-pointer">Eat</li>
          <li className="hover:text-blue-600 cursor-pointer">Relax</li>
          <li className="hover:text-blue-600 cursor-pointer">Videos</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
