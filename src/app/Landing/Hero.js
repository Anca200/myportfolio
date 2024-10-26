"use client";
import React, { useState, useEffect } from 'react';
import heroImage from '../public/images/heroImage.jpg';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";
import AnimatedLines from "../components/animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-screen bg-gradient-to-r from-custom_green_light to-custom_green_dark flex flex-col items-center justify-center text-white px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Animation Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedLines />
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-[1200px] items-center justify-between z-10 space-y-8 lg:space-y-0">
          
          {/* Left side content */}
          <div className="text-center lg:text-left max-w-lg lg:max-w-[50%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-spaceGrotesk">
              Welcome to My Web <span className='text-[#8dfdcc] font-semibold '>Journey</span>: Learning One Bug at a Time!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Hey there, I&#39;m Anca! A junior web developer on a quest to conquer the <span className='text-[#8dfdcc] text-shadow-neon font-semibold'>coding</span> world one typo at a time! If you see me wrestling with JavaScript, just know I&#39;m probably one <span className='text-[#8dfdcc] text-shadow-neon font-semibold'>coffee</span> away from greatness!
            </p>

            {/* Button */}
            <button className="w-[200px] h-[60px] bg-[#4acfb4] text-[#f1f1f1] rounded-br-3xl rounded-tl-3xl transition-all duration-500 transform hover:scale-105 border-b-4 border-[#8dfdcc] hover:border-[#59e4d7] hover:border-opacity-100 mt-[50px] text-xl font-spaceGrotesk font-semibold items-center flex justify-center gap-[10px] hover:shadow-neon">
              <FaDownload /> Resume
            </button>
          </div>

          {/* Right side with image and shadow */}
          <div className="relative w-[150px] lg:w-[250px] flex items-center justify-center">
            {/* Green shadow div */}
            <div className="absolute -left-[-40px] -bottom-4 w-[100%] h-[100%] bg-[#75f6be] rounded-lg transform -rotate-3 z-0"></div>
            
            {/* Image with tilt */}
            <Image    
              src={heroImage.src}  
              alt="Selfie Image"
              className="relative z-10 w-full rounded-lg transform -rotate-3 shadow-neon"
              width={150}  
              height={150}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;