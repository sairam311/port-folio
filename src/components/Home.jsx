import React, { useState, useEffect } from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight, MdDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { FaHackerrank, FaGithub, FaUser, FaBriefcase, FaLinkedin, FaReact, FaPython, FaAws, FaNodeJs } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiJavascript, SiMongodb, SiDjango, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  
  const titles = [
    "AI Developer",
    "Full Stack Developer", 
    "Problem Solver",
    "Innovation Leader"
  ];

  useEffect(() => {
    setIsVisible(true);
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(titleInterval);
  }, [titles.length]);

  return (
    <div
      name="home"
      className="h-screen md:h-screen min-h-[100vh] md:min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-full h-full px-4 md:flex-row relative z-10 py-8 md:py-0">
        <div className={`flex flex-col justify-center h-full transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Name and Title - Compact Version */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-base sm:text-2xl font-light text-gray-300 mb-1 sm:mb-2 animate-fadeInUp">
              Hello, I'm
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-2 sm:mb-4 animate-fadeInUp delay-300">
              Sai Ram
            </h2>
            <div className="h-10 sm:h-16">
              <h3 className="text-xl sm:text-4xl font-bold text-white transition-all duration-500 transform">
                I'm an{' '}
                <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text animate-pulse">
                  {titles[currentTitle]}
                </span>
              </h3>
            </div>
          </div>
          
          {/* Professional Summary - Compact */}
          <p className="text-gray-400 py-3 sm:py-4 max-w-xl text-base sm:text-lg leading-relaxed animate-fadeInUp delay-500">
            Innovative <span className="text-cyan-400 font-semibold">AI Developer</span> specializing in <span className="text-blue-400 font-semibold">Agentic-AI solutions,</span> and <span className="text-green-400 font-semibold">full-stack development</span>. 
            Expert in <span className="text-yellow-400 font-semibold">MERN stack</span>, <span className="text-orange-400 font-semibold">Python</span>, and AI/ML technologies.
          </p>

          {/* CTA Buttons - Compact */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 animate-fadeInUp delay-700">
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white px-4 sm:px-8 py-3 sm:py-4 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <FaBriefcase className="mr-2" size={16} />
              Projects
              <span className="group-hover:translate-x-1 duration-300 ml-1">
                <MdOutlineKeyboardArrowRight size={16} />
              </span>
            </Link>
            
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-cyan-400 border-2 border-cyan-400 px-4 sm:px-8 py-3 sm:py-4 flex items-center rounded-lg hover:bg-cyan-400 hover:text-white cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <FaUser className="mr-2" size={16} />
              About
            </Link>
            
            <a
              href="/port-folio/resume.pdf"
              download="resume.pdf"
              className="group text-green-400 border-2 border-green-400 px-4 sm:px-8 py-3 sm:py-4 flex items-center rounded-lg hover:bg-green-400 hover:text-white cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <MdDownload className="mr-2" size={16} />
              Resume
            </a>
          </div>
          {/* Social Links - Compact */}
          <div className="flex mt-4 sm:mt-6 space-x-4 animate-fadeInUp delay-1000">
            <a
              href="https://www.linkedin.com/in/sai-ram-kamineni-4827b6290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/sairam311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
              title="GitHub Profile"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://leetcode.com/u/21r21a12f9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transform hover:scale-110 transition-all duration-300"
              title="LeetCode Profile"
            >
              <SiLeetcode size={32} />
            </a>
            <a
              href="https://www.codechef.com/users/sai_ram_33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
              title="CodeChef Profile"
            >
              <SiCodechef size={32} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/21r21a12f9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
              title="HackerRank Profile"
            >
              <FaHackerrank size={32} />
            </a>
          </div>
        </div>

        {/* Interactive Tech Showcase - Compact */}
        <div className={`mt-4 md:mt-0 md:ml-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative group" onClick={() => setIsCardExpanded(!isCardExpanded)}>
            {/* Main 3D Card - Compact Size */}
            <div className="relative w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-cyan-400/30 shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Tech Icons hovering around card border */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                {/* React - Top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaReact className="text-white text-lg animate-pulse" />
                  </div>
                </div>
                {/* Python - Right */}
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaPython className="text-white text-lg animate-pulse" />
                  </div>
                </div>
                {/* Node.js - Bottom */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaNodeJs className="text-white text-lg animate-pulse" />
                  </div>
                </div>
                {/* MongoDB - Left */}
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <SiMongodb className="text-white text-lg animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Inner ring of tech icons */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                {/* JavaScript - Top Right */}
                <div className="absolute -top-3 right-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                    <SiJavascript className="text-black text-sm animate-bounce" />
                  </div>
                </div>
                {/* AWS - Bottom Right */}
                <div className="absolute -bottom-3 right-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                    <FaAws className="text-white text-sm animate-bounce" />
                  </div>
                </div>
                {/* Django - Bottom Left */}
                <div className="absolute -bottom-3 left-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-md">
                    <SiDjango className="text-white text-sm animate-bounce" />
                  </div>
                </div>
                {/* Tailwind - Top Left */}
                <div className="absolute -top-3 left-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                    <SiTailwindcss className="text-white text-sm animate-bounce" />
                  </div>
                </div>
              </div>
              
              {/* Profile Image and Content */}
              <div className="relative z-10 h-full p-3 sm:p-6 flex flex-col justify-center items-center transition-all duration-500">
                {/* Profile Image - positioned to accommodate text */}
                <div className="relative transition-all duration-500 -translate-y-4">
                  <img
                    src={HeroImage}
                    alt="Sai Ram - AI Developer"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-3 border-cyan-400/50 shadow-xl group-hover:border-cyan-400 transition-all duration-300"
                  />
                  
                </div>

                {/* Tech Stack Info - always visible */}
                <div className="text-center text-white transition-all duration-500 opacity-100 translate-y-0 mt-4">
                  <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                    Tech Stack
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">
                    Full Stack • AI/ML • Cloud
                  </p>
                  <div className="flex justify-center flex-wrap gap-1 sm:gap-2">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">MERN</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">Python</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">AI/ML</span>
                  </div>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
            <div className="absolute top-1/4 -left-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-3000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;