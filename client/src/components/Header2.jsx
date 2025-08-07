import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TechnoBatsHeaderLogo from "../images/technobats-header-logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-yellow-300 shadow-md w-full z-50 relative px-6 sm:px-12">
            {/* Desktop Header */}
            <div className="hidden md:flex container mx-auto justify-between items-center py-4 px-6">
                <NavLink to="/" onClick={closeMenu}>
                    {/* <img src={TechnoBatsHeaderLogo} className="w-150 h-150"  alt="Logo" /> */}
                    {/* width={150} height={150} */}
                    <img src={TechnoBatsHeaderLogo} alt="Logo" className="w-16 sm:w-20 md:w-24 lg:w-64" />
                </NavLink>

                <nav className="flex items-center space-x-6">
                    <NavLink to="/" className={({ isActive }) =>
                        `text-black hover:text-white transition-all ${isActive ? "font-bold" : ""}`}>
                        Home
                    </NavLink>
                    <NavLink to="/about-us" className={({ isActive }) =>
                        `text-black hover:text-white transition-all ${isActive ? "font-bold" : ""}`}>
                        About Us
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) =>
                        `text-black hover:text-white transition-all ${isActive ? "font-bold" : ""}`}>
                        Services
                    </NavLink>
                    <NavLink to="/packages" className={({ isActive }) =>
                        `text-black hover:text-white transition-all ${isActive ? "font-bold" : ""}`}>
                        Packages
                    </NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) =>
                        `text-black hover:text-white transition-all ${isActive ? "font-bold" : ""}`}>
                        Contact Us
                    </NavLink>
                </nav>

                <a
                    href="https://wa.me/+923164641190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow"
                >
                    Free Consultation
                </a>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <NavLink to="/" onClick={closeMenu}>
                    <img src={TechnoBatsHeaderLogo} alt="Logo" className="h-12 w-50" />
                </NavLink>

                {/* Button */}
                {/* <a
          href="https://wa.me/+923164641190"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-yellow-300 to-orange-300 px-6 py-3 rounded-md text-black text-center font-semibold text-lg leading-tight"
        >
          Schedule A<br />Meeting
        </a> */}

                {/* Hamburger Icon */}
                <button
                    className="text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-9 h-9 mt-3 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-yellow-300 text-black px-6 py-4 space-y-4 text-center">
                    <NavLink to="/" onClick={closeMenu} className="block border-b">Home</NavLink>
                    <NavLink to="/about-us" onClick={closeMenu} className="block border-b">About Us</NavLink>
                    <NavLink to="/services" onClick={closeMenu} className="block border-b">Services</NavLink>
                    <NavLink to="/packages" onClick={closeMenu} className="block border-b">Packages</NavLink>
                    <NavLink to="/contact-us" onClick={closeMenu} className="block border-b">Contact Us</NavLink>
                    <a
                        href="https://wa.me/+923164641190"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="block bg-white text-black px-4 py-2 rounded-md text-center"
                    >
                        Free Consultation
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
