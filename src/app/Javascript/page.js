'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import AnimatedLines from "../components/animation";
import ProjectCard from "../LandingPages/ProjectCard";

// Project images and icons
import MemoryGame from "../public/images/Javascript/MemoryGame.png";

import htmlIcon from "../public/images/html_Icon.png";
import cssIcon from "../public/images/css_Icon.png";
import jsIcon from "../public/images/javascrip_Icon.png";
import tailwindIcon from "../public/images/tailwind_Icon.png";
import viteIcon from "../public/images/vite_Icon.png";
import reactIcon from "../public/images/react_Icon.png";

const Page = () => {
  const router = useRouter();

  const originalProjects = [
    {
      title: "Memory Game",
      description: "A fun web-based memory game where players match Pokémon pairs. Features dynamic type-based borders, responsive design, and lazy-loaded images for a smooth experience. Perfect for Pokémon fans of all ages!",
      hasImage: true,
      icons: [htmlIcon, cssIcon, jsIcon],
      imageSrc: MemoryGame,
      url: "https://anca200.github.io/Pokemon-Memory-Game/" 
    },
    
    
    
  ];

  const inspiredProjects = [
    { title: "Coming Soon", description: "...", hasImage: false, icons: [reactIcon, tailwindIcon], url: "/projects/coming-soon" },
  ];

  return (
    <section className="w-full h-auto bg-gradient_general flex flex-col items-center">
      <div className="absolute left-4 top-4 cursor-pointer" onClick={() => router.push('/')}>
        <RiArrowLeftDoubleFill color="#00FF99" size={40} className="lg:size-[80px]" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedLines />
      </div>

      {/* Original Design Section */}
      <h2 className="text-white text-center p-4 lg:text-[2rem] mb-8 font-glitch title mt-[50px]">Mini Games</h2>
      <div className="flex flex-col items-center gap-[100px] w-full lg:w-[90%]">
        {originalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Inspired Design Section */}
      <h2 className="text-white text-center p-4 lg:text-[2rem] mb-8 font-glitch title mt-[50px]">Learning Projects</h2>
      <div className="flex flex-col items-center gap-[100px] w-full lg:w-[90%]">
        {inspiredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Page;