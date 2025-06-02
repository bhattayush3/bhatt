import React from "react";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      url: "https://github.com/bhattayush3/cryptoX",
      name: "JobX",
    },
    {
      id: 2,
      src:project2,
      url: "https://github.com/bhattayush3/Smart-noise/tree/main",
      name: "Smart Noise Detection & Alarming System",
    },
    {
      id: 3,
      src: project3,
      url: "https://github.com/bhattayush3/EMS",
      name: "Employee Management system"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-2xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , name, url }) => ( 
            <a href={url} target="_blank" rel="noreferrer" >
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                style={{ width: 500, height: 250 }}
                className="rounded-md"
              />
              <div className="flex items-center justify-center">
                <div className="px-6 py-3 m-4">
                  {name}
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;