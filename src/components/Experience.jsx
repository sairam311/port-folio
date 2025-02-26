import React from 'react'

const Experience = () => {
  return (
    <div name="experience"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-blue-500">
            Experience
          </p>
        </div>
        <h1 className='text-yellow-500 font-bold'>Kantag solutions - Python developer</h1><br></br>
        <p>∗ Contributed as a backend developer, building and maintaining scalable applications and services using Python and Django.<br></br>
        ∗ Developed and integrated APIs, enabling seamless communication between various services and external systems.</p>
        <br></br><br></br>
        <h1 className='text-yellow-500 font-bold'> Computer Society of INDIA (C.S.I) wing at MLRIT - Chairman</h1><br></br>
        <p>∗ Led and managed the CSI chapter, increasing membership by 30% and organizing technical workshops and guest lectures that benefited over 600 students.
        <br></br>∗ Managed a team of 20+ student volunteers, delegating tasks, coordinating efforts, and fostering a collaborative environment to achieve goals.
        <br></br>∗ Developed and implemented team-building activities and training programs to enhance volunteer skills and improve team performance.</p>
      </div>
    </div>
  )
}

export default Experience