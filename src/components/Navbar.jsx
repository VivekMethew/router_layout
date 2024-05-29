import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../constants";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex justify-between p-5">
        <nav>
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Post</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="hover:text-gray-900">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
