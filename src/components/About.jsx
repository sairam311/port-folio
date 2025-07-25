import React from "react";
const about = [
  {
    title: "Personal details",
    imgPosition:"right",
    description: [
      "Name : K.Sai Ram",
      "Age : 21",
      "Gender : Male",
      "Location : Hyderabad",
      "Passion : Web development",
    ],
    durationPosition: "right",
  },
  {
    title: "Education",
    imgPosition:"left",
    description: [
      "Course : B.Tech",
      "Institute : MLR Institute of Technology",
      "Specialization : IT",
      "CGPA : 7.1",
      "Year of Graduation : 2025"
    ],
    durationPosition: "left",
  },
  {
    title: "Skills",
    imgPosition:"right",
    description: [
      "MERN STACK",
      "Python development",
      "Django",
      "React.js",
      "HTML, CSS, JavaScript",
      "Python, Java",
      "Data Structures and Algorithms"
    ],
    durationPosition: "right",
  },
];
const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-blue-500">
            About
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          
          {about.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center w-full mb-10 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Circle Icon */}
              <div className="">
               {/* {exp.icon}  */}
              </div>

              {/* Experience Card */}
              <div
                className={`bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-5/12 relative mt-16 sm:mt-0 ${
                  index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"
                }`}
              >
                <h1 className="text-yellow-500 font-bold text-xl">{exp.title}</h1>
                <ul className="mt-2 text-sm font-bold list-inside space-y-1">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
