import React from "react";

import html from "../assets/html.png";
import sql from "../assets/sql.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import aws from "../assets/aws.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
//import tailwind from "../assets/tailwind.png";
import django from "../assets/django.png";

const Technicalskills = () => {
  const techs = [
    {
      id: 1,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: django,
      title: "Django",
      style: "shadow-white",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
  /*  {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },  */
    {
      id: 8,
      src: aws,
      title: "Amazon Web Services",
      style: "shadow-white",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Technical skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline hover:text-blue-500">
            Technical skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technicalskills;
