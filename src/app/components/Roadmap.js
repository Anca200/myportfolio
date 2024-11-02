
"use client";
// components/Roadmap.js
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
    { title: "Landing Pages", href:"/projects2"  },
    { title: "Next.js Websites", href: "/projects/nextjs-website" },
    { title: "E-commerce Platforms", href: "/projects/ecommerce-platform" },
  ];

  return (
    <section className="flex flex-col items-center py-10 bg-gradient-to-r from-custom_green_light to-custom_green_dark">
      <div className="relative w-full lg:w-[80%] flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-300 h-full hidden lg:block"></div>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center w-full mb-12">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0 pr-0 lg:pr-8">
              <Link href={project.href} className="text-lg lg:text-xl font-bold text-white text-center lg:text-right hover:underline">
                {project.title}
              </Link>
            </div>

            <div className="relative flex justify-center w-full lg:w-0 lg:justify-center mb-4 lg:mb-0">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-gray-300"></div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pl-0 lg:pl-8">
              <div className="w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[300px] rounded-md shadow-lg bg-cover bg-center"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;