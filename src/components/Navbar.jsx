import React from "react";
import logo from "../Images/logo.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="KFC logo" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className="btn1">LOGIN</button>
    </nav>
  );
};

export default Navbar;