import React from "react";
import { FaPython, FaUniversity } from "react-icons/fa";
import csi from "../assets/chairman.png";

const experiences = [
  {
    title: "Python Developer",
    company: "8th Element",
    duration: "Jun 2024 - Present",
    icon: <FaPython className="text-white text-3xl" />,
    img:"",
    imgPosition:"right",
    description: [
      "Contributed as a Backend Developer, focusing on AI and Large Language Models (LLMs), with hands-on experience in Python and API development to support intelligent system functionalities and scalable backend services.",
    ],
    durationPosition: "right",
  },
  {
    title: "Python Developer",
    company: "Kantag Solutions",
    duration: "Dec 2024 - May 2025",
    icon: <FaPython className="text-white text-3xl" />,
    img:"",
    imgPosition:"left",
    description: [
      "Contributed as a backend developer, building and maintaining scalable applications and services using Python and Django.",
      "Developed and integrated APIs, enabling seamless communication between various services and external systems.",
    ],
    durationPosition: "left",
  },
  {
    title: "Chairman",
    company: "CSI Wing at MLRIT",
    duration: "March 2023 - May 2025",
    icon: <FaUniversity className="text-white text-3xl" />,
    img:csi,
    imgPosition:"right",
    description: [
      "Led and managed the CSI chapter, increasing membership by 30% and organizing technical workshops and guest lectures that benefited over 600 students.",
      "Managed a team of 20+ student volunteers, delegating tasks, coordinating efforts, and fostering a collaborative environment to achieve goals.",
      "Developed and implemented team-building activities and training programs to enhance volunteer skills and improve team performance.",
    ],
    durationPosition: "right",
  },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 text-white w-full py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-blue-500">
            Work Experience
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical White Line (only on desktop) */}
          <div className="absolute w-1 bg-white h-full top-0 left-1/2 transform -translate-x-1/2 hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center w-full mb-10 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle Icon */}
              <div className="absolute flex items-center justify-center w-14 h-14 bg-gray-800 border-4 border-white rounded-full transform -translate-x-1/2 left-1/2">
                {exp.icon}
                {/* Duration (Placed on the correct side) */}
                <div
                  className={`absolute text-justify text-gray-400 text-sm font-semibold ${
                    exp.durationPosition === "right"
                      ? "left-[calc(50%+50px)]"
                      : "right-[calc(50%+50px)]"
                  } hidden sm:block`}
                >
                  {exp.duration}
                </div>
              </div>

              {/* Experience Card */}
              <div
                className={`bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-5/12 relative mt-16 sm:mt-0 ${
                  index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"
                }`}
              >
                <h1 className="text-yellow-500 font-bold text-xl">{exp.title}</h1>
                <p className="text-gray-300 italic">{exp.company}</p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {/* Duration inside the card (mobile view only) */}
                <div
                  className={`absolute text-justify text-gray-400 text-sm font-semibold ${
                    exp.durationPosition === "right"
                      ? "left-[calc(50%-50px)] sm:hidden bottom-2"
                      : "right-[calc(50%-50px)] sm:hidden bottom-2"
                  }`}
                >
                  {exp.duration}
                </div>
              </div>
              
              {/* Image 
              { exp.img &&(
                <div
                  className={`absolute text-justify text-gray-400 text-sm font-semibold ${
                    exp.imgPosition === "right"
                    ? "left-[calc(50%+50px)]"
                    : "right-[calc(50%+50px)]"
                  } hidden sm:block`}
                >
                  <img
                    src={exp.img}
                    alt={`${exp.title}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}    */}
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;