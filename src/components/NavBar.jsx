import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
      display: "Home"
    },
    {
      id: 2,
      link: "about",
      display: "About"
    },
    {
      id: 3,
      link: "Projects",
      display: "Projects"
    },
    {
      id: 4,
      link: "Technical skills",
      display: "Skills"
    },
    {
      id: 5,
      link: "experience",
      display: "Experience"
    },
    {
      id: 6,
      link: "contact",
      display: "Contact"
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to={"home"} smooth duration={500}>
              <div className="group cursor-pointer">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-300">
                  <span className="hidden sm:inline">Sai Ram Chowdary</span>
                  <span className="sm:hidden">Sai Ram</span>
                </h1>
                {/*<p className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 -mt-1">
                  AI Developer
                </p> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
            {links.map(({ id, link, display }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="relative px-4 lg:px-5 py-3 text-base lg:text-lg text-gray-300 font-medium cursor-pointer rounded-lg transition-all duration-300 hover:text-white hover:bg-white/10 group"
                >
                  {display}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 transform ${
        nav ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Simple black background for mobile menu */}
        <div className="absolute inset-0 bg-black" onClick={() => setNav(false)}>
          {/* Close button in top right */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setNav(false)}
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <div className="flex flex-col h-full pt-20 px-6" onClick={(e) => e.stopPropagation()}>
            {/* Mobile menu items - Enhanced for black background */}
            <ul className=" flex-col bg-black space-y-4 mt-8">
              {links.map(({ id, link, display }) => (
                <li key={id}>
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block py-5 px-6 text-2xl font-semibold text-white hover:text-cyan-400 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  >
                    {display || link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
