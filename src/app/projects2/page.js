import React from 'react';
import Image from 'next/image';
import TimeWave from "../public/images/LandingPages/TimeWave.png"; // Image for the second div
import FitFuel from "../public/images/LandingPages/FitFuel.png"; // Image for the first div

import htmlIcon from "../public/images/html_Icon.png";
import cssIcon from "../public/images/css_Icon.png";
import jsIcon from "../public/images/javascrip_Icon.png";
import tailwindIcon from "../public/images/tailwind_Icon.png";
import viteIcon from "../public/images/vite_Icon.png";

const page = () => {
  const projects = [
    {
      title: "TimeWave",
      description: "A clean and modern static landing page for a smartwatch product, built using HTML, CSS, and JavaScript. This project showcases responsive design, interactive elements, and a sleek user interface.",
      background: "bg-blue-500",
      hasImage: true,
      icons: [htmlIcon, cssIcon, jsIcon], 
      imageSrc: TimeWave 
    },
    {
      title: "FitFuel",
      description: "A clean and modern nutrition landing page built with Vite and Tailwind CSS. Featuring a responsive design, fast performance, and intuitive UI, Fit Fuel helps users easily access personalized meal plans and nutrition advice",
      background: "bg-purple-500",
      hasImage: true, // Second div has an image
      icons: [tailwindIcon, viteIcon], // Icons for the second project
      imageSrc: FitFuel // Image source for the second project
    },
    {
      title: "Project 3",
      description: "An intuitive task management tool for improving productivity.",
      background: "bg-pink-500",
      hasImage: false,
      icons: [htmlIcon, cssIcon, jsIcon], // Icons for the third project
    },
  ];

  return (
    <section className="w-full h-screen bg-gradient-to-r from-custom_green_light to-custom_green_dark flex flex-col items-center justify-center">
      <h2 className="text-white text-center p-4 text-3xl mb-8">Original Design</h2>

      <div className="flex justify-evenly w-[90%] space-x-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              {/* Front Side */}
              <div className={`project-card-front ${project.background} flex items-center justify-center rounded-[10px] overflow-hidden`}>
                {project.hasImage ? (
                  <Image
                    src={project.imageSrc}
                    alt="Project Image"
                    layout="fill" // Fill the parent div
                    objectFit="cover" // Cover to maintain aspect ratio
                    className="rounded-[10px]" 
                  />
                ) : (
                  <h3 className="text-xl font-semibold text-center text-white">{project.title}</h3>
                )}
              </div>

              {/* Back Side */}
              <div className="project-card-back bg-green-500 flex flex-col items-center justify-center rounded-[10px] text-white px-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-center mb-4">{project.description}</p>
                <p className="text-sm font-semibold">Made With:</p>
                <div className="flex space-x-4 mt-2">
                  {project.icons && project.icons.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon}
                      alt="Tech Icon"
                      width={32}
                      height={32}
                      className="object-contain"
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

export default page;