"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Roadmap = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("Current route:", router.pathname);
  }, [router.pathname]);

  const projects = [
    { title: "Landing Pages", href:"/LandingPages"  },
    { title: "Coming Soon", href: "/projects/nextjs-website" },
    { title: "Coming Soon", href: "/projects/ecommerce-platform" },
  ];

  return (
    <section className="flex flex-col items-center py-10 bg-gradient-to-r from-custom_green_light to-custom_green_dark" id="roadmap">
      <div className="relative w-full lg:w-[80%] flex flex-col items-center">
        
        {/*Middle Line*/}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#8dfdcc] h-full hidden lg:block"></div>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center w-full mb-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0 pr-0 lg:pr-8">
              <Link href={project.href} className="text-lg lg:text-[2rem]  text-white text-center lg:text-right transition-all duration-500 transform hover:scale-105 hover:text-shadow-neon font-marcelus font-bold shadow-2xl">
                {project.title}
              </Link>
            </div>

            <div className="relative flex justify-center w-full lg:w-0 lg:justify-center mb-4 lg:mb-0">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#8dfdcc] rounded-full  shadow-neon"></div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pl-0 lg:pl-8">
              <div className="w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[300px] rounded-md  bg-cover bg-center shadow-neon"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;