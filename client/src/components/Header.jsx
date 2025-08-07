import React, { useState } from "react";
//import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TechnoBatsLogo from "../images/technobats-logo.png";
import TechnoBatsHeaderLogo from "../images/technobats-header-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // bg-gradient-to-r from-customBlue to-customPink
    <header className="bg-yellow-300 shadow-md sm:px-13">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Logo */}
        <NavLink to="/" className="text-left" onClick={closeMenu}>
          <img src={TechnoBatsHeaderLogo} width={150} height={150} />
        </NavLink>

        {/* Center: Navigation */}

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:text-white transition-all duration-200 ${isActive ? "text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `text-black hover:text-white transition-all duration-200 ${isActive ? "text-white" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-black hover:text-white transition-all duration-200 ${isActive ? "text-white" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `text-black hover:text-white transition-all duration-200 ${isActive ? "text-white" : ""
              }`
            }
          >
            Packages
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `text-black hover:text-white transition-all duration-200 ${isActive ? "text-white" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Side: Free Consultation Button */}
        <a
          href="https://wa.me/+923164641190"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-blue-700 text-black py-2 px-4 rounded"
        >
          {/* <FaWhatsapp className="text-2xl" /> */}
          <span className="text-lg">Free Consultation</span>
        </a>

        {/* Mobile Menu: Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-customBlue text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/packages"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Packages
            </NavLink>
            <NavLink
              to="/contact-us"
              className="hover:text-opacity-80"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <a
              href="https://wa.me/+923267374898"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 transition"
              onClick={closeMenu}
            >
              <FaWhatsapp className="text-lg" />
              <span>Free Consultation</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;