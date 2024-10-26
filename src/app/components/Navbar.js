"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track if scrolled

  const handleClick = (link) => {
    setActiveLink(link);
    setNav(false); // Close the mobile menu when a link is clicked
  };

  const handleNav = () => {
    setNav(!nav); // Toggle the menu open/close
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Change isScrolled based on scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full lg:h-[60px]  p-[1rem] top-0 left-0 z-50 flex justify-between  lg:px-4 text-white items-center text-center font-spaceGrotesk font-semibold  transition duration-300 ${
        isScrolled ? "bg-[#11998e] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h2 className="lg:text-[1.5rem] text-[1.2rem] font-dancing">
        Anca <span className="text-shadow-neon text-[#8dfdcc]">P.</span>
      </h2>

      {/* Links for large screens */}
      <div className="hidden lg:flex gap-[20px] text-[1.2rem]">
        <ul className="flex gap-6">
          <li>
            <a
              href="#about" // Updated href to section IDs
              className={`nav-link relative inline-block transition-all duration-500 hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#8dfdcc] before:transition-all before:duration-500 hover:before:w-full hover:before:h-[3px] hover:before:rounded-[10px] ${
                activeLink === "link1" ? "before:w-full" : ""
              }`}
              onClick={() => handleClick("link1")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects" // Updated href to section IDs
              className={`nav-link relative inline-block transition-all duration-500 hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#8dfdcc] before:transition-all before:duration-500 hover:before:w-full hover:before:h-[3px] hover:before:rounded-[10px] hover:before:shadow-neon ${
                activeLink === "link2" ? "before:w-full" : ""
              }`}
              onClick={() => handleClick("link2")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact" // Updated href to section IDs
              className={`nav-link relative inline-block transition-all duration-500 hover:scale-110 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#8dfdcc] before:transition-all before:duration-500 hover:before:w-full hover:before:h-[3px] hover:before:rounded-[10px] hover:before:shadow-neon ${
                activeLink === "link3" ? "before:w-full" : ""
              }`}
              onClick={() => handleClick("link3")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="w-[120px] bg-[#4c9173] text-gray-200 px-4 py-2 rounded-br-3xl rounded-tl-3xl transition-all duration-500 transform hover:scale-105 border-b-[3px] border-[#8dfdcc] hover:border-[#5fe4c9] hover:border-opacity-100 drop-shadow-xl hover:shadow-neon">
          Roadmap
        </button>
      </div>

      {/* Hamburger Menu Icon for mobile */}
      <div onClick={handleNav} className="lg:hidden z-50">
        <FiMenu size={25} className="text-white cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 bg-[#11998e] transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center h-full gap-8 font-poppins font-bold text-2xl text-white">
          <li
            className="hover:text-[#37b877] cursor-pointer"
            onClick={() => handleClick("link1")}
          >
            About
          </li>
          <li
            className="hover:text-[#37b877] cursor-pointer"
            onClick={() => handleClick("link2")}
          >
            Projects
          </li>
          <li
            className="hover:text-[#37b877] cursor-pointer"
            onClick={() => handleClick("link3")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;