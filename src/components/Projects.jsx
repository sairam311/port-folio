import React, { useState } from "react";
import sassy_medical from "../assets/portfolio/sassy_medical.png";
import lostandfound from "../assets/portfolio/lost&found.png";
import guess_song from "../assets/portfolio/guess_song.png";
import travels from "../assets/portfolio/aitravel.png";
import Quizz from "../assets/portfolio/quizz.jpg";
import passwordgenerator from "../assets/portfolio/passwordgenerator.png";

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
      title:"Guess song",
      src: guess_song,
      techStack: ["React.js", "JavaScript", "API Integration", "CSS"],
      link: "https://sairam311.github.io/Guess-song/",
    },
    {
      id: 4,
      title:"Quizz app",
      src: Quizz,
      techStack: ["React.js", "JavaScript", "CSS"],
      link: "https://sairam311.github.io/Quizz/",
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
      title:"Password Generator",
      src: passwordgenerator,
      techStack: ["HTML", "JavaScript", "CSS"],
      link: "https://sairam311.github.io/password_generator/",
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