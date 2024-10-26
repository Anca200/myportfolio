"use client"; // Make this a Client Component

import React from 'react';

const DotNavigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-10">
      <div 
        onClick={() => scrollToSection('hero')}
        className="w-3 h-3 rounded-full bg-[#4acfb4] cursor-pointer transition duration-300 hover:bg-[#8dfdcc] hover:shadow-neon"
      />
      <div 
        onClick={() => scrollToSection('about')}
        className="w-3 h-3 rounded-full bg-[#4acfb4] cursor-pointer transition duration-300 hover:bg-[#8dfdcc] hover:shadow-neon"
      />
      <div 
        onClick={() => scrollToSection('projects')}
        className="w-3 h-3 rounded-full bg-[#4acfb4] cursor-pointer transition duration-300 hover:bg-[#8dfdcc] hover:shadow-neon"
      />
    </div>
  );
};

export default DotNavigation;