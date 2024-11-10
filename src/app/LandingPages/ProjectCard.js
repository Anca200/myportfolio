// ProjectCard.js
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectCard = ({ project }) => {
    const router = useRouter();

    const handleCardClick = () => {
        if (project.url.startsWith("http")) {
          // External URL: open in a new tab
          window.open(project.url, "_blank");
        } else {
          // Internal URL: navigate within the app
          router.push(project.url);
        }
      };

  return (
    <div 
    onClick={handleCardClick} 
    className="project-card cursor-pointer w-full max-w-full p-4 lg:p-0 lg:max-w-full">
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
          <p className="text-sm md:text-base text-center mb-4 lg:mb-[20px]">{project.description}</p>
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
  );
};

export default ProjectCard;