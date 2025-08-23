import React from "react";
import { FaUser, FaGraduationCap, FaCode } from "react-icons/fa";
const about = [
  {
    title: "Professional Profile",
    icon: <FaUser className="text-cyan-400 text-2xl" />,
    imgPosition:"right",
    description: [
      "Innovative Full Stack Developer with expertise in AI/ML integration",
      "Current AI Developer at 8th Element, specializing in Agentic-AI solutions",
      "Proven leadership experience as CSI Chairman, driving 30% membership growth",
      "Based in Hyderabad, India • Open to remote opportunities",
      "Passionate about building scalable, intelligent applications"
    ],
    durationPosition: "right",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-400/50"
  },
  {
    title: "Education & Achievements",
    icon: <FaGraduationCap className="text-yellow-400 text-2xl" />,
    imgPosition:"left",
    description: [
      "B.Tech in Information Technology • MLR Institute of Technology",
      "CGPA: 7.1/10 • Graduating 2025",
      "Led CSI Wing with 600+ student impact through technical workshops",
      "Organized multiple guest lectures and technical events",
      "Snooker Champion 2024 • Runner-up 2025 at College Sports Meet",
      "Active participant in competitive programming platforms"
    ],
    durationPosition: "left",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/50"
  },
  {
    title: "Technical Expertise",
    icon: <FaCode className="text-green-400 text-2xl" />,
    imgPosition:"right",
    description: [
      "Full Stack Development: MERN Stack, Django, FastAPI",
      "AI/ML: Generative AI, Agentic AI, LLM Integration, Python ML Libraries",
      "Frontend: React.js, Angular, TypeScript, HTML5, CSS3, Tailwind CSS",
      "Backend: Python, Java, Node.js, RESTful APIs, Database Design",
      "Cloud & Tools: AWS, Git, PostgreSQL, MongoDB, Socket.io",
      "Problem Solving: Data Structures, Algorithms, System Design"
    ],
    durationPosition: "right",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400/50"
  },
];
const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 via-black to-gray-900 p-4 text-white min-h-screen relative overflow-hidden">
      {/* Subtle background elements for consistency */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-6000"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative py-8 z-10">
        {/* Enhanced Section Title */}
        <div className="pb-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main title with advanced animations */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text animate-gradient-x bg-300% hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-500">
                About
              </span>
              {" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text animate-gradient-x bg-300% hover:from-green-400 hover:via-teal-500 hover:to-cyan-500 transition-all duration-500 delay-200">
                Me
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20 md:w-24 animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle - Compact */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light animate-fadeInUp delay-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover my <span className="text-cyan-400 font-semibold">professional journey</span>, 
              <span className="text-blue-400 font-semibold"> technical expertise</span>, and 
              <span className="text-purple-400 font-semibold"> achievements</span>
            </p>
            
            {/* Floating particles */}
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -top-4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>

        {/* Enhanced Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Desktop Timeline Line */}
          <div className="absolute w-1 bg-gradient-to-b from-cyan-400 via-yellow-400 to-green-400 h-full top-0 left-1/2 transform -translate-x-1/2 hidden sm:block opacity-30 shadow-lg"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute w-0.5 bg-gradient-to-b from-cyan-400/60 via-yellow-400/60 to-green-400/60 h-full top-0 left-8 sm:hidden opacity-60"></div>
          
          {about.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 sm:mb-8 group ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Enhanced Timeline Circle Icon - Compact */}
              <div className={`
                flex items-center justify-center rounded-full z-10 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-xl
                w-10 h-10 sm:w-12 sm:h-12 
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

              {/* Enhanced Card - More Compact */}
              <div
                className={`bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl w-full sm:w-5/12 relative transition-all duration-500 group overflow-hidden border border-2 ${exp.borderColor} hover:shadow-3xl hover:scale-[1.02] 
                  ml-10 sm:ml-0 mt-3 sm:mt-0 
                  ${index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"}
                `}
              >
                {/* Enhanced glowing effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 -z-10`}></div>
                <div className={`absolute -inset-1 bg-gradient-to-br ${exp.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur transition-all duration-500 -z-20`}></div>
                
                {/* Card Header with Enhanced Icon - Compact */}
                <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700/50 group-hover:border-gray-600/50 transition-colors duration-300">
                  <div className={`mr-2 sm:mr-3 p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${exp.gradient} group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-white text-base sm:text-lg">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {exp.title}
                    </h3>
                    <div className={`w-6 sm:w-8 h-0.5 bg-gradient-to-r ${exp.gradient.replace('from-', 'from-').replace('to-', 'to-')} mt-1 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300`}></div>
                  </div>
                </div>
                
                {/* Enhanced Content with Better Typography - Compact */}
                <div className="space-y-3 sm:space-y-4">
                  {exp.description.map((point, idx) => (
                    <div key={idx} className="group/item flex items-start group-hover:text-white transition-colors duration-300 hover:bg-white/5 p-1 sm:p-1.5 rounded-lg transition-all duration-200">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 group/item-hover:scale-110 transition-all duration-200`}>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced decorative elements */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${exp.gradient} rounded-3xl opacity-5 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${exp.gradient} rounded-3xl opacity-5 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
                
                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-3xl overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${exp.gradient.replace('from-', 'from-').replace('to-', 'to-')} w-0 group-hover:w-full transition-all duration-1000 delay-200`}></div>
                </div>
                
                {/* Interactive corner hover effects */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center animate-spin-slow`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating elements on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300`}></div>
                  <div className={`absolute bottom-8 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-500`}></div>
                  <div className={`absolute top-1/2 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300 delay-700`}></div>
                </div>
              </div>
            
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
