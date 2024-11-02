// Landing/Projects.js
import Roadmap from "../components/Roadmap";

const Projects = () => {
  const projects = [
    {id:"1",
      title: "Landing Pages",
    
      image: "/images/landing-page.jpg",
    },
    {
      title: "Next.js Websites",

      image: "/images/nextjs-website.jpg",
    },
    {
      title: "E-commerce Platforms",
     
      image: "/images/ecommerce.jpg",
    },
    // Add more projects as needed
  ];

  return <Roadmap projects={projects} />;
};

export default Projects;