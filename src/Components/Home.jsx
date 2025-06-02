import React from "react";
import imgportfolio from "../assets/imgportfolio.jpeg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
 
  const socials = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ayush-bhatt-22026424b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/bhattayush3",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ayushbhatt963@gmail.com",
    },

  ]
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm <Typewriter
  
                onInit={(typewriter)=> {
                typewriter                
                .typeString("Ayush Bhatt")
                .pauseFor(500)
                .deleteAll()
                .typeString("a Software Developer")
                .pauseFor(500)
                .start();
                }}
                />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love developing and improving systems that can be used by a large number of users.
          </p>
          <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socials.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
          <div>
            <a href="https://drive.google.com/file/d/1KqmYh7uarnTlhUL7kd9l1aP1Y4GfeNoL/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span>
                <BsArrowRightShort size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={imgportfolio}
            alt="my profile"
            className="rounded-2xl mx-auto w-96 h-96 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;