"use client"; // Ensure this is rendered on the client side
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

// Import icons here
import htmlIcon from "../public/images/html_Icon.png";
import cssIcon from "../public/images/css_Icon.png";
import jsIcon from "../public/images/javascrip_Icon.png";
import tailwindIcon from "../public/images/tailwind_Icon.png";
import reactIcon from "../public/images/react_Icon.png";
import viteIcon from "../public/images/vite_Icon.png";
import nextIcon from "../public/images/next_Icon.png";
import gitIcon from "../public/images/git_Icon.png";
import githubIcon from "../public/images/github_Icon.png";
import mysqlIcon from "../public/images/mysql_Icon.png";
import microsqlIcon from "../public/images/microsql_Icon.png";
import firebaseIcon from "../public/images/firebase_Icon.png";
import nodeIcon from "../public/images/node_Icon.png";

const Skills = () => {
  const controls = useAnimation();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [1, 1.1, 1],
        x: [0, -10, 10, -8, 8, -5, 5, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  const techStack = [
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: tailwindIcon, name: "Tailwind" },
    { icon: reactIcon, name: "React" },
    { icon: viteIcon, name: "Vite" },
    { icon: nextIcon, name: "Next.js" },
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: microsqlIcon, name: "SQL Server" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: nodeIcon, name: "Node.js" },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-r from-custom_green_light to-custom_green_dark flex flex-col items-center justify-center overflow-hidden px-4"
      id="skills"
    >
      {/* My Skills Title with Shake Animation */}
      <motion.div
        ref={titleRef}
        animate={controls}
        className=" w-[180px] h-[70px] lg:w-[200px] lg:h-[100px] bg-[#58b19a] flex items-center justify-center text-center mb-[80px] mt-[70px] lg:mt-0 rounded-[10px] z-20 shadow-neon p-4 lg:p-0"
      >
        <h2 className="font-pressStart text-shadow-neon text-white text-[1rem] lg:text-[1.2rem]">
          My Skills
        </h2>
      </motion.div>

      {/* Floating Row 1 */}
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0], // Floating effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" grid grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:w-full max-w-[90%] justify-center mb-8 z-20 items-center text-center content-center" // Adjusted bottom margin for more space
      >
        {techStack.slice(0, 6).map((tech, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] rounded-[30px] bg-[#58b19a] flex flex-col items-center justify-center p-2 transition-all duration-500 transform hover:scale-105 hover:shadow-neon cursor-pointer shadow-lg z-10 lg:w-[145px] lg:h-[145px]" // Adjusted for mobile-first approach
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="mb-2 w-[30px] lg:w-[50px] "
            />
            <p className="text-white font-semibold font-spaceGrotesk text-sm lg:text-[1.2rem] text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Floating Row 2 */}
      <motion.div
        animate={{
          y: [0, 10, 0, -10, 0], // Opposite float effect
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="grid grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:w-full max-w-[90%] justify-center mb-8 z-20 items-center text-center content-center"
      >
        {techStack.slice(6).map((tech, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] rounded-[30px] bg-[#58b19a] flex flex-col items-center justify-center p-2 transition-all duration-500 transform hover:scale-105 hover:shadow-neon cursor-pointer shadow-lg z-10 lg:w-[145px] lg:h-[145px]" 
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="mb-2 w-[30px] lg:w-[50px]"
            />
            <p className="text-white font-semibold text-sm lg:text-[1.3rem] font-spaceGrotesk text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;