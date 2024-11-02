import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./Landing/Hero";
import Skills from "./Landing/Skills";
import Projects from "./Landing/Projects";
import DotNavigation from "./components/DotNavigations";
import AnimatedLines from "./components/animation";

const page = () => {
  return (
    <>
         <Navbar />
        <AnimatedLines /> 
        <Hero />
        <DotNavigation />
        <Skills />
        <Projects />
    </>
  )
}

export default page