"use client";
import React, { useState, useEffect, useRef } from "react";
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

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { threshold: 0.5 });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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
    { icon: jsIcon, name: "Java Script" },
    { icon: tailwindIcon, name: "Tailwind" },
    { icon: reactIcon, name: "React" },
    { icon: viteIcon, name: "Vite" },
    { icon: nextIcon, name: "Next.js" },
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: microsqlIcon, name: "Microsoft SQL" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: nodeIcon, name: "Node.js" },
  ];

  return (
    <section className="relative w-full h-screen bg-[#11998e] flex flex-col items-center justify-center overflow-hidden">
      {/* My Skills Title with Shake Animation */}
      <motion.div
        ref={titleRef}
        animate={controls}
        className="w-[200px] h-[100px] bg-white/20 flex items-center justify-center text-center mb-[100px] rounded-[10px]  border-2 border-white"
      >
        <h2 className="font-pressStart text-shadow-neon text-white text-[1.2rem]">
          My Skills
        </h2>
      </motion.div>

      {/* Floating Row 1 */}
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0], // Float up and down
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-wrap gap-4 w-full max-w-[90%] justify-center mb-8"
      >
        {techStack.slice(0, 6).map((tech, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] sm:w-[145px] sm:h-[145px] rounded-[10px] bg-white/10 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-neon cursor-pointer border-2 border-white"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="sm:w-16 sm:h-16 mb-2"
            />
            <p className="text-white font-semibold font-spaceGrotesk text-sm lg:text-[1.2rem]  text-center ">
              {tech.name}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Floating Row 2 */}
      <motion.div
        animate={{
          y: [0, 10, 0, -10, 0], // Opposite float to Row 1
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-wrap gap-4 w-full max-w-[90%] justify-center"
      >
        {techStack.slice(6).map((tech, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] sm:w-[145px] sm:h-[145px] rounded-[10px] bg-white/10 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-neon cursor-pointer border-2 border-white"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="sm:w-16 sm:h-16 mb-2"
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

export default About;