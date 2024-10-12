import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaBars } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/logo/logo1.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-[5rem] bg-white flex justify-center items-center">
      <div className="w-[95%] h-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-[240px] h-auto">
          <img className="relative bottom-[2px]" src={logo} alt="logo" />
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex md:gap-[20px] font-extrabold  text-2xl font-roboto">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Links for mobile (toggle-controlled) */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } md:hidden bg-white font-extrabold  text-2xl font-roboto flex-col justify-around items-center h-60 w-full absolute top-20 left-0`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Social icons for desktop */}
        <div className="hidden md:flex text-3xl font-bold gap-[15px]">
          <a href=" https://www.instagram.com/bhandarirepositories/"><FaInstagram /></a>
          <a href=" https://www.instagram.com/bhandarirepositories/"><FaFacebookSquare /></a>
          <a href=" https://www.instagram.com/bhandarirepositories/"><RiTwitterXLine /></a>
        </div>

        {/* Toggle button for mobile */}
        <div
          className="text-4xl font-bold md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
