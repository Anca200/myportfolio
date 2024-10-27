"use client";
import React from 'react';
import heroImage from '../public/images/heroImage.jpg';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";
import { motion } from 'framer-motion';
import AnimatedLines from "../components/animation";
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Forces scroll to top on load
  }, []);
  const text = "Welcome to My Web Journey: Learning One Bug at a Time!";


  // Word animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "string",
        stiffness: 500,
        damping: 30,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen" id="hero">
      <div className="relative w-full min-h-screen bg-gradient-to-r from-custom_green_light to-custom_green_dark flex flex-col items-center justify-center text-white z-10 lg:pt-0"> 
        
        {/* Animation Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedLines />
        </div>

        <div className="flex flex-col lg:flex-row w-[90%] max-w-[1200px] items-center justify-between z-10 space-y-8 lg:space-y-0 mt-[80px] lg:mt-0">
          
          {/* Left side content */}
          <div className="text-center lg:text-left max-w-lg lg:max-w-[50%]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="glitch-container" // Add this class to target glitch delay
            >
              <h1 className="text-[1.8rem] lg:text-6xl font-bold mb-4 font-spaceGrotesk">
                {text.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    custom={wordIndex}
                    variants={wordVariants}
                    className={`inline-block ${word.trim() === "Journey" ? "font-bold" : ""}`}
                  >
                    {word + (wordIndex !== text.split(" ").length - 1 ? "\u00A0" : "")}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            

            {/* Subtext and button */}
            <div className="mt-4 ">
              <p className="text-base text-[1rem] leading-[25px] lg:leading-[30px] lg:text-xl">
                Hey there, I&#39;m Anca! A junior web developer on a quest to conquer the <span className="text-[#8dfdcc] font-semibold">coding</span> world one typo at a time! If you see me wrestling with JavaScript, just know I&#39;m probably one <span className="text-[#8dfdcc] font-semibold">coffee</span> away from greatness!
              </p>

              {/* Button */}
              <button className="w-[150px]  lg:w-[200px] lg:h-[60px] px-4 py-2 bg-gradient-to-r from-[#66c2a3] to-[#26c08c] text-gray-100 rounded-full rounded-bl-2xl rounded-tr-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-3 hover:bg-gradient-to-r hover:from-[#5fe4c9] hover:to-[#8dfdcc] border-b-4 border-[#8dfdcc] hover:border-[#37b877] hover:shadow-neon flex items-center justify-center gap-2 font-semibold font-spaceGrotesk tracking-wide mt-[50px]">
                <FaDownload /> Resume
              </button>
            </div>
          </div>

          {/* Right side with image and shadow */}
          <div className="relative w-[150px] lg:w-[250px] flex items-center justify-center">
            {/* Green shadow div */}
            <div className="absolute -left-[-40px] -bottom-4 w-[100%] h-[100%] bg-[#75f6be] rounded-lg transform -rotate-3 z-0"></div>
            
            {/* Image with tilt */}
            
            <Image
  src={heroImage.src}
  alt="Selfie Image"
  className="relative z-10 w-full rounded-lg transform -rotate-3 shadow-neon glitch-image"
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