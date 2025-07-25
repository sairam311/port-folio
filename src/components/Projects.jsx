import React, { useState } from "react";
import sassy_medical from "../assets/portfolio/sassy_medical.png";
import lostandfound from "../assets/portfolio/lost&found.png";
import CGPA_calculator from "../assets/portfolio/CGPA_calculator.png";
import travels from "../assets/portfolio/aitravel.png";
import dynamic_card_manager from "../assets/portfolio/dynamic_card_manager.png";
import chatapp from "../assets/portfolio/chat-app.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title:"Appointment booking system",
      src: sassy_medical,
      techStack: ["MERN STACK", "AI Chat bot", "API Integration", "Tailwind CSS"],
      link: "https://sassy-medical.onrender.com/",
    },
    {
      id: 2,
      title:"AI-Travel app",
      src: travels,
      techStack: ["MERN STACK", "AI Chat bot", "API Integration", "Tailwind CSS"],
      link: "https://slg-travels.onrender.com/",
    },
    {
      id: 3,
      title:"Chat-App",
      src: chatapp,
      techStack: ["React.js", "Django", "Socket.io"],
      link: "https://sairam311.github.io/chat-app/",
    },
    {
      id: 4,
      title:"Dynamic Card Manager",
      src: dynamic_card_manager,
      techStack: ["Angular", "TypeScript", "HTML", "CSS"],
      link: "https://sairam311.github.io/angular-task/",
    },
    {
      id: 5,
      title:"Lost & Found",
      src: lostandfound,
      techStack: ["PHP", "HTML", "JavaScript", "SQL"],
      link: "https://github.com/sairam311/L-F/tree/master",
    },
    {
      id: 6,
      title:"CGPA Calculator",
      src: CGPA_calculator,
      techStack: ["HTML", "JavaScript", "CSS"],
      link: "https://sairam311.github.io/CGPA-Calculator/",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-blue-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, src, techStack, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => link && window.open(link, "_blank")} // Only open if link exists
            >
              <img
                src={src}
                alt=""
                className={`rounded-md duration-200 hover:scale-105 object-cover h-45 ${ // Added object-cover, w-full, and h-full
                  hoveredItem === id ? "blur-lg" : ""
                }`}
              />
              {hoveredItem!==id && (
                <p className="px-3 py-1 mt-4 mb-2 text-center hover:scale-105 text-white rounded font-bold">
                  {title}
                </p>
              )}
              {hoveredItem === id && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md">
                  <div className="text-lg font-bold">
                    {techStack.map((tech, index) => (
                      <div key={index}>{tech}</div>
                    ))}
                  </div>
                  <p className="px-3 py-1 mt-4 mb-2 text-center text-yellow-500 rounded font-bold">
                    {title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;