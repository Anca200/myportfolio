'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import AnimatedLines from "../components/animation";
import ProjectCard from "../LandingPages/ProjectCard";

// Project images and icons
import TimeWave from "../public/images/LandingPages/TimeWave.png";
import FitFuel from "../public/images/LandingPages/FitFuel.png";
import HoneyBliss from "../public/images/LandingPages/HoneyBliss.png";
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
      title: "TimeWave",
      description: "A clean and modern static landing page for a smartwatch product, built using HTML, CSS, and JavaScript. This project showcases responsive design, interactive elements, and a sleek user interface.",
      hasImage: true,
      icons: [htmlIcon, cssIcon, jsIcon],
      imageSrc: TimeWave,
      url: "https://anca200.github.io/SmartWatch-Static-Landing-Page/" 
    },
    {
      title: "FitFuel",
      description: "A clean and modern nutrition landing page built with Vite and Tailwind CSS. Featuring a responsive design, fast performance, and intuitive UI, Fit Fuel helps users easily access personalized meal plans and nutrition advice.",
      hasImage: true,
      icons: [viteIcon, tailwindIcon],
      imageSrc: FitFuel,
      url: "https://fitfuel-anca.netlify.app/"
    },
    {
      title: "HoneyBliss",
      description: "A responsive, honey-themed landing page built with React and styled with Tailwind CSS. Designed to showcase products beautifully, it’s optimized for all devices with a clean layout, engaging visuals, and smooth interactions.",
      hasImage: true,
      icons: [reactIcon, tailwindIcon],
      imageSrc: HoneyBliss,
      url: "https://honey-bliss-landing-page.netlify.app/"
    }
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
      <h2 className="text-white text-center p-4 lg:text-[2rem] mb-8 font-glitch title mt-[50px]">Original Design</h2>
      <div className="flex flex-col items-center gap-[100px] w-full lg:w-[90%]">
        {originalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Inspired Design Section */}
      <h2 className="text-white text-center p-4 lg:text-[2rem] mb-8 font-glitch title mt-[50px]">Inspired Design</h2>
      <div className="flex flex-col items-center gap-[100px] w-full lg:w-[90%]">
        {inspiredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Page;