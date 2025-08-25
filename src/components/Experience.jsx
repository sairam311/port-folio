import React from "react";
import { FaPython, FaUniversity, FaRobot, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "AI Developer",
    company: "8th Element",
    duration: "Jun 2025 - Present",
    location: "On-Site",
    type: "Internship",
    icon: <FaRobot className="text-white text-2xl sm:text-3xl" />,
    imgPosition: "right",
    durationPosition: "right",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/50",
    technologies: ["Python", "FastAPI", "LLMs", "AI/ML", "GenAI"],
    achievements : [
  "Built and deployed 5+ AI-powered applications using Python, FastAPI, and LLM/AI models.",
  "Engineered a FastAPI orchestration layer automating multi-step workflows.",
  "Led AI integration initiatives, coordinating LLM reasoning tool, APIs, and data pipelines for scalable GenAI solutions."
]

  },
  {
    title: "Python Developer",
    company: "Kantag Solutions",
    duration: "Dec 2024 - May 2025",
    location: "Remote",
    type: "Internship",
    icon: <FaPython className="text-white text-2xl sm:text-3xl" />,
    imgPosition: "left",
    durationPosition: "left",
    gradient: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-400/50",
    technologies: ["Python", "Django", "APIs", "Backend", "Microservices"],
    achievements: [
  "Built and maintained scalable backend applications using Python and Django",
  "Developed and integrated APIs for seamless service-to-service communication",
  "Enhanced system performance and reliability through optimized backend solutions"
]

  },
  {
    title: "Chairman",
    company: "CSI Wing at MLRIT",
    duration: "March 2023 - May 2025",
    location: "Hyderabad, India",
    type: "Leadership Role",
    icon: <FaUniversity className="text-white text-2xl sm:text-3xl" />,
    imgPosition: "right",
    durationPosition: "right",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/50",
    technologies: ["Leadership", "Event Management", "Team Building", "Public Speaking"],
    achievements: [
      "Increased membership by 30%",
      "Organized 15+ technical events",
      "Managed team of 20+ volunteers"
    ]
  },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white w-full relative overflow-hidden min-h-screen">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-6000"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative py-8 z-10 px-4">
        {/* Enhanced Section Title matching About/Projects/Skills components */}
        <div className="pb-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main title with advanced animations */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text animate-gradient-x bg-300% hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-500">
                Work
              </span>
              {" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-gradient-x bg-300% hover:from-green-400 hover:via-teal-500 hover:to-cyan-500 transition-all duration-500 delay-200">
                Experience
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-20 md:w-24 animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light animate-fadeInUp delay-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Journey through my <span className="text-orange-400 font-semibold">professional career</span>, 
              <span className="text-cyan-400 font-semibold"> leadership roles</span>, and 
              <span className="text-purple-400 font-semibold"> key achievements</span>
            </p>
            
            {/* Floating particles */}
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -top-4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>

        {/* Enhanced Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Desktop Timeline Line */}
          <div className="absolute w-1 bg-gradient-to-b from-orange-400 via-cyan-400 to-purple-400 h-full top-0 left-1/2 transform -translate-x-1/2 hidden sm:block opacity-30 shadow-lg"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute w-0.5 bg-gradient-to-b from-orange-400/60 via-cyan-400/60 to-purple-400/60 h-full top-0 left-8 sm:hidden opacity-60"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 sm:mb-8 group ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Enhanced Timeline Circle Icon - Compact */}
              <div className={`
                flex items-center justify-center rounded-full z-10 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-xl
                w-12 h-12 sm:w-14 sm:h-14 
                bg-gradient-to-br ${exp.gradient} border-2 ${exp.borderColor}
                absolute left-2 sm:transform sm:-translate-x-1/2 sm:left-1/2 
                relative sm:absolute
                group-hover:shadow-2xl
              `}>
                <div className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200">
                  {exp.icon}
                </div>
                {/* Pulsing ring effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-30 animate-ping`}></div>
              </div>

              {/* Enhanced Experience Card */}
              <div
                className={`bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl w-full sm:w-5/12 relative transition-all duration-500 group overflow-hidden border-2 ${exp.borderColor} hover:shadow-3xl hover:scale-[1.02] 
                  ml-10 sm:ml-0 mt-3 sm:mt-0 
                  ${index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"}
                `}
              >
                {/* Enhanced glowing effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-25 transition-all duration-500 -z-10`}></div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500 -z-20`}></div>
                
                {/* Card Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white sm:text-transparent sm:bg-gradient-to-r sm:from-white sm:to-gray-200 sm:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl sm:text-2xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50">
                      <FaCalendarAlt className="text-orange-400" />
                      <span className="text-gray-300">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50">
                      <span className="text-purple-400 font-medium">{exp.type}</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Description 
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-gray-200 border-b border-gray-700/50 pb-2">Key Responsibilities</h4>
                  <div className="space-y-3">
                    {exp.description.map((point, idx) => (
                      <div key={idx} className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-200">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient.replace('/20', '')} flex-shrink-0 mt-2 mr-3 group/item-hover:scale-125 transition-all duration-200`}></div>
                        <span className="text-sm sm:text-base leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>  */}

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} border ${exp.borderColor} text-white hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="border-t border-gray-700/50 pt-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                
                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${exp.gradient.replace('/20', '')} w-0 group-hover:w-full transition-all duration-1000 delay-300`}></div>
                </div>
                
                {/* Floating elements on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300"></div>
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-500"></div>
                  <div className="absolute top-1/2 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-700"></div>
                </div>
              </div>
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;