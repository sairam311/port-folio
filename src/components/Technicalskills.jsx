import React from "react";

import html from "../assets/html.png";
import sql from "../assets/sql.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import aws from "../assets/aws.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import django from "../assets/django.png";

const Technicalskills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/50",
      skills: [
        {
          id: 1,
          src: reactImage,
          title: "React",
          proficiency: "Expert",
          description: "Component-based UI development"
        },
        {
          id: 2,
          src: html,
          title: "HTML5",
          proficiency: "Expert",
          description: "Semantic markup & accessibility"
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          proficiency: "Advanced",
          description: "ES6+, DOM manipulation, APIs"
        }
      ]
    },
    {
      category: "Backend Development",
      gradient: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/50",
      skills: [
        {
          id: 4,
          src: nodejs,
          title: "Node.js",
          proficiency: "Advanced",
          description: "Server-side JavaScript runtime"
        },
        {
          id: 5,
          src: django,
          title: "Django",
          proficiency: "Advanced",
          description: "Python web framework"
        }
      ]
    },
    {
      category: "Database & Cloud",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/50",
      skills: [
        {
          id: 6,
          src: mongodb,
          title: "MongoDB",
          proficiency: "Advanced",
          description: "NoSQL database management"
        },
        {
          id: 7,
          src: sql,
          title: "SQL",
          proficiency: "Advanced",
          description: "Relational database queries"
        },
        {
          id: 8,
          src: aws,
          title: "AWS",
          proficiency: "Intermediate",
          description: "Cloud services & deployment"
        }
      ]
    },
    {
      category: "Development Tools",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/50",
      skills: [
        {
          id: 9,
          src: github,
          title: "Git & GitHub",
          proficiency: "Advanced",
          description: "Version control & collaboration"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency) => {
    const colors = {
      'Expert': 'text-green-400',
      'Advanced': 'text-blue-400',
      'Intermediate': 'text-yellow-400',
      'Beginner': 'text-orange-400'
    };
    return colors[proficiency] || 'text-gray-400';
  };

  const getProficiencyWidth = (proficiency) => {
    const widths = {
      'Expert': 'w-full',
      'Advanced': 'w-4/5',
      'Intermediate': 'w-3/5',
      'Beginner': 'w-2/5'
    };
    return widths[proficiency] || 'w-1/5';
  };

  return (
    <div
      name="Technical skills"
      className="bg-gradient-to-b from-gray-800 via-black to-gray-900 w-full relative overflow-hidden min-h-screen"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-6000"></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative py-8 z-10 px-4">
        {/* Enhanced Section Title matching About/Projects components */}
        <div className="pb-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main title with advanced animations */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
              <span className="text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 bg-clip-text animate-gradient-x bg-300% hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 transition-all duration-500">
                Technical
              </span>
              {" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text animate-gradient-x bg-300% hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-500 delay-200">
                Skills
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent w-20 md:w-24 animate-pulse"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light animate-fadeInUp delay-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore my <span className="text-green-400 font-semibold">technical expertise</span> across 
              <span className="text-cyan-400 font-semibold"> full-stack development</span> and 
              <span className="text-purple-400 font-semibold"> modern technologies</span>
            </p>
            
            {/* Floating particles */}
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -top-4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((categoryData, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {categoryData.category}
                </h3>
                <div className={`h-0.5 bg-gradient-to-r ${categoryData.gradient.replace('/20', '')} w-16 group-hover:w-24 transition-all duration-300`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.id}
                    className={`group/skill relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border-2 ${categoryData.borderColor} hover:shadow-3xl transition-all duration-500 overflow-hidden p-6`}
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    {/* Enhanced glowing effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient} rounded-2xl opacity-0 group-hover/skill:opacity-25 transition-all duration-500 -z-10`}></div>
                    <div className={`absolute -inset-1 bg-gradient-to-br ${categoryData.gradient} rounded-2xl opacity-0 group-hover/skill:opacity-50 blur transition-all duration-500 -z-20`}></div>
                    
                    {/* Skill Content */}
                    <div className="relative z-10">
                      {/* Skill Icon */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative">
                          <img 
                            src={skill.src} 
                            alt={skill.title} 
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                          />
                          {/* Glow effect around icon */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient} rounded-full opacity-0 group-hover/skill:opacity-30 blur-xl transition-all duration-500`}></div>
                        </div>
                      </div>

                      {/* Skill Title */}
                      <h4 className="text-xl font-bold text-white text-center mb-2 group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-cyan-400 group-hover/skill:to-blue-400 group-hover/skill:bg-clip-text transition-all duration-300">
                        {skill.title}
                      </h4>

                      {/* Skill Description */}
                      <p className="text-gray-400 text-sm text-center mb-4 group-hover/skill:text-gray-300 transition-colors duration-300">
                        {skill.description}
                      </p>

                      {/* Proficiency Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400 uppercase tracking-wider">Proficiency</span>
                          <span className={`text-sm font-semibold ${getProficiencyColor(skill.proficiency)}`}>
                            {skill.proficiency}
                          </span>
                        </div>
                        
                        {/* Proficiency Bar */}
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${categoryData.gradient.replace('/20', '')} rounded-full transition-all duration-1000 delay-300 ${getProficiencyWidth(skill.proficiency)}`}
                            style={{ width: '0%' }}
                            onAnimationEnd={(e) => {
                              e.target.style.width = getProficiencyWidth(skill.proficiency).replace('w-', '').replace('full', '100%').replace('4/5', '80%').replace('3/5', '60%').replace('2/5', '40%').replace('1/5', '20%');
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${categoryData.gradient} rounded-3xl opacity-5 group-hover/skill:opacity-20 transition-all duration-500 -z-10`}></div>
                    <div className={`absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr ${categoryData.gradient} rounded-3xl opacity-5 group-hover/skill:opacity-20 transition-all duration-500 -z-10`}></div>
                    
                    {/* Floating elements on hover */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className={`absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-ping transition-opacity duration-300 delay-300`}></div>
                      <div className={`absolute bottom-6 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-pulse transition-opacity duration-300 delay-500`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technicalskills;