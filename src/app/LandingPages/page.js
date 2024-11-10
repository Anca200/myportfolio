'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import TimeWave from "../public/images/LandingPages/TimeWave.png";
import FitFuel from "../public/images/LandingPages/FitFuel.png";
import htmlIcon from "../public/images/html_Icon.png";
import cssIcon from "../public/images/css_Icon.png";
import jsIcon from "../public/images/javascrip_Icon.png";
import tailwindIcon from "../public/images/tailwind_Icon.png";
import viteIcon from "../public/images/vite_Icon.png";
import AnimatedLines from "../components/animation";



const Page = () => {
  const router = useRouter();
  const projects = [
    {
      title: "TimeWave",
      description: "A clean and modern static landing page for a smartwatch product, built using HTML, CSS, and JavaScript. This project showcases responsive design, interactive elements, and a sleek user interface.",
      hasImage: true,
      icons: [htmlIcon, cssIcon, jsIcon], 
      imageSrc: TimeWave 
    },
    {
      title: "FitFuel",
      description: "A clean and modern nutrition landing page built with Vite and Tailwind CSS. Featuring a responsive design, fast performance, and intuitive UI, Fit Fuel helps users easily access personalized meal plans and nutrition advice",
      hasImage: true,
      icons: [tailwindIcon, viteIcon],
      imageSrc: FitFuel 
    },
    {
      title: "Project 3",
      description: "An intuitive task management tool for improving productivity.",
      hasImage: false,
      icons: [htmlIcon, cssIcon, jsIcon],
    },
  ];

  return (
    <section className="w-full h-auto bg-gradient_general flex flex-col items-center ">

      {/* Home Arrow */}
      <div className="absolute left-4 top-4 cursor-pointer" onClick={() => router.push('/')}>
        <RiArrowLeftDoubleFill color="#00FF99" size={40} className="lg:size-[80px]" />
      </div>

          {/*Title*/}
          <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedLines />
        </div>
      <h2 className="text-white text-center p-4 lg:text-[2rem] mb-8 font-glitch title mt-[50px]">Original Design</h2>

      {/* Project Cards */}
      <div className="flex flex-col items-center gap-[100px] w-full lg:w-[90%]">
        {projects.map((project, index) => (
          <div key={index} className="project-card cursor-pointer w-full max-w-full p-4 lg:p-0 lg:max-w-full">
            <div className="project-card-inner rounded-[20px] shadow-neon2 transition-transform transform hover:scale-105">

              {/* Front Side */}
              <div className={`project-card-front ${project.background} flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[300px] overflow-hidden rounded-[20px]`}>
                {project.hasImage ? (
                  <Image
                    src={project.imageSrc}
                    alt="Project Image"
                    layout="fill"
                    objectFit="object-contain"
                    className="rounded-[20px]"
                  />
                ) : (
                  <h3 className="text-lg md:text-xl font-semibold text-center text-white">{project.title}</h3>
                )}
              </div>

              {/* Back Side */}
              <div className="project-card-back bg-emerald p-4 flex flex-col items-center justify-center rounded-[20px] text-white font-spaceGrotesk">
                <h3 className="text-lg md:text-xl lg:text-[2rem] lg:mb-[20px]  mb-2  title font-marcelus font-bold">{project.title}</h3>
                <p className="text-sm md:text-base text-center mb-4">{project.description}</p>
                <p className="text-xs md:text-sm font-normal title lg:text-[1.2rem] font-glitch ">Made With:</p>
                <div className="flex space-x-4 mt-2">
                  {project.icons && project.icons.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon}
                      alt="Tech Icon"
                      width={24}
                      height={24}
                      className="object-contain lg:w-[30px] lg:mt-[10px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;