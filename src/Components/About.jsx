import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
            
        </p>

        <br />

        <p className="text-xl">
        A future software engineer who loves to solve challenging problems. With good foundation in frontend and backend and solved over 250+ problems on various coding platforms.
<br/>
<br/>
Languages - C++, C, JavaScript, Python
<br/>
Frameworks & Tools - MongoDB, NodeJS, React, ExpressJS
<br/>

<br/>
Graduation - 
Dr. A. P. J. Abdul Kalam Technical University, Lucknow (Branch - Computer Science And Engineering)

        </p>
      </div>
    </div>
  );
};

export default About;