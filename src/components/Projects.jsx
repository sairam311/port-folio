import React from "react";
import { FaExternalLinkAlt, FaRocket, FaCloud, FaDatabase } from "react-icons/fa";
import { SiReact, SiMongodb, SiDjango, SiTailwindcss, SiAngular, SiTypescript, SiPython, SiJavascript, SiHtml5, SiPhp, SiPostgresql } from "react-icons/si";
import sassy_medical from "../assets/portfolio/sassy_medical.png";
import lostandfound from "../assets/portfolio/lost&found.png";
import emp_tracker from "../assets/portfolio/emp_tracker.png";
import travels from "../assets/portfolio/aitravel.png";
import dynamic_card_manager from "../assets/portfolio/dynamic_card_manager.png";
import chatapp from "../assets/portfolio/chat-app.png";

const Projects = () => {

  const getTechIcon = (tech) => {
    const iconMap = {
      'MERN STACK': <SiReact className="text-cyan-400" />,
      'React': <SiReact className="text-cyan-400" />,
      'React.js': <SiReact className="text-cyan-400" />,
      'MongoDB': <SiMongodb className="text-green-500" />,
      'Django': <SiDjango className="text-green-600" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
      'Angular': <SiAngular className="text-red-500" />,
      'TypeScript': <SiTypescript className="text-blue-400" />,
      'Python': <SiPython className="text-yellow-400" />,
      'JavaScript': <SiJavascript className="text-yellow-300" />,
      'HTML': <SiHtml5 className="text-orange-500" />,
      'PHP': <SiPhp className="text-purple-400" />,
      'PostgreSQL': <SiPostgresql className="text-blue-300" />,
      'Socket.io': <FaCloud className="text-green-400" />,
      'API Integration': <FaDatabase className="text-blue-500" />,
      'AI Chat bot': <FaRocket className="text-purple-500" />,
      'CSS': <SiHtml5 className="text-blue-500" />,
      'SQL': <FaDatabase className="text-blue-400" />
    };
    return iconMap[tech] || <FaRocket className="text-gray-400" />;
  };

  const projects = [
    {
      id: 1,
      title: "Appointment Booking System",
      src: sassy_medical,
      techStack: ["MERN STACK", "AI Chat bot", "API Integration", "Tailwind CSS"],
      link: "https://sassy-medical.onrender.com/",
      category: "Healthcare",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50"
    },
    {
      id: 2,
      title: "AI Travel Assistant",
      src: travels,
      techStack: ["MERN STACK", "AI Chat bot", "API Integration", "Tailwind CSS"],
      link: "https://slg-travels.onrender.com/",
      category: "Travel & Tourism",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/50"
    },
    {
      id: 3,
      title: "Employee Tracking System",
      src: emp_tracker,
      techStack: ["React", "Tailwind CSS", "Django", "PostgreSQL"],
      link: "https://sairam311.github.io/emp_tracking_system/",
      category: "Enterprise Software",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-400/50"
    },
    {
      id: 4,
      title: "Dynamic Card Manager",
      src: dynamic_card_manager,
      techStack: ["Angular", "TypeScript", "HTML", "CSS"],
      link: "https://sairam311.github.io/angular-task/",
      category: "Web Application",
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/50"
    },
    {
      id: 5,
      title: "Lost & Found Platform",
      src: lostandfound,
      techStack: ["PHP", "HTML", "JavaScript", "SQL"],
      link: "https://github.com/sairam311/L-F/tree/master",
      category: "Community Service",
      gradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-400/50"
    },
    {
      id: 6,
      title: "Real-Time Chat Application",
      src: chatapp,
      techStack: ["React.js", "Django", "Socket.io"],
      link: "https://sairam311.github.io/chat-app/",
      category: "Communication",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50"
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-800 w-full text-white relative overflow-hidden min-h-screen"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-6000"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative py-8 z-10 px-4">
        {/* Enhanced Section Title matching About component */}
        <div className="pb-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main title with advanced animations */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-gradient-x bg-300% hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-500">
                Featured
              </span>
              {" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text animate-gradient-x bg-300% hover:from-green-400 hover:via-teal-500 hover:to-cyan-500 transition-all duration-500 delay-200">
                Projects
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20 md:w-24 animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light animate-fadeInUp delay-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore my <span className="text-cyan-400 font-semibold">full-stack applications</span>, 
              <span className="text-blue-400 font-semibold"> AI-powered solutions</span>, and 
              <span className="text-purple-400 font-semibold"> innovative web experiences</span>
            </p>
            
            {/* Floating particles 
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -top-4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div> */}
          </div>  
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border-2 ${project.borderColor} hover:shadow-3xl transition-all duration-500 overflow-hidden animate-fadeInUp`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced glowing effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-25 transition-all duration-500 -z-10`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500 -z-20`}></div>
              
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-36 sm:h-40 object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Category Badge */}
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} backdrop-blur-sm border ${project.borderColor} text-white`}>
                  {project.category.length > 12 ? project.category.substring(0, 12) + '...' : project.category}
                </span>
              </div>
                
                {/* External Link Icon */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center border ${project.borderColor} cursor-pointer hover:scale-110 transition-transform duration-200`}
                       onClick={() => project.link && window.open(project.link, "_blank")}>
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4">
                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-200 group/tech">
                        <span className="text-xs group-hover/tech:scale-110 transition-transform duration-200">
                          {getTechIcon(tech)}
                        </span>
                        <span className="text-xs text-gray-300 group-hover/tech:text-white transition-colors duration-200">
                          {tech.length > 8 ? tech.substring(0, 8) + '...' : tech}
                        </span>
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <div className="px-1.5 py-0.5 rounded bg-gray-600/50 text-xs text-gray-400">
                        +{project.techStack.length - 4}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Action Button */}
                <div className="mt-3 pt-2 border-t border-gray-700/50">
                  <button
                    onClick={() => project.link && window.open(project.link, "_blank")}
                    className={`w-full py-1.5 px-3 rounded-lg bg-gradient-to-r ${project.gradient.replace('/20', '/80')} text-white font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1.5 border ${project.borderColor} hover:shadow-lg text-xs`}
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${project.gradient} rounded-3xl opacity-5 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
              <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${project.gradient} rounded-3xl opacity-5 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${project.gradient.replace('/20', '')} w-0 group-hover:w-full transition-all duration-1000 delay-200`}></div>
              </div>
              
              {/* Floating elements on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300`}></div>
                <div className={`absolute bottom-8 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-500`}></div>
                <div className={`absolute top-1/2 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-700`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;