import React from 'react';
import heroImage from '../public/images/heroImage.jpg';  
import heroBackground from '../public/images/heroBackground.png'; 
import Image from 'next/image'; 
import HeroIcon1 from "../public/images/HeroIcon1.png";
import HeroIcon2 from "../public/images/HeroIcon2.png";
import HeroIcon3 from "../public/images/HeroIcon3.png";
import { FaDownload } from "react-icons/fa6";
import AnimatedLines from "../components/animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      


      {/* Hero Content Layer with Gradient */}
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

          {/* Right side with image and icons */}
          <div className="relative w-[150px] lg:w-[250px] flex items-center justify-center">
            <Image    
              src={heroImage.src}  
              alt="Selfie Image"
              className="w-full mask-img rounded-lg "
              width={150}  
              height={150}
              priority
            />

            {/* Icons */}
            <div className="absolute bottom-[-70px] lg:bottom-[-50px] left-1/2 transform -translate-x-1/2">
              <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] relative drop-shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <Image 
                  src={HeroIcon1} 
                  alt="Icon 1" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </div>

            <div className="absolute left-[-80px] lg:left-[-70px] lg:top-[300px] transform -translate-y-1/2">
              <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] relative transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <Image 
                  src={HeroIcon2} 
                  alt="Icon 2"
                  layout="fill"
                  objectFit="contain" 
                />
              </div>
            </div>

            <div className="absolute right-[-80px] lg:right-[-80px] lg:top-[300px] transform -translate-y-1/2">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] relative transition-all duration-500 transform hover:scale-105 cursor-pointer">
                <Image 
                  src={HeroIcon3} 
                  alt="Icon 3" 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute lg:bottom-0 lg:right-0 lg:w-[100%] sm:w-[100%] opacity-[0.3] z-0">
          <Image
            src={heroBackground}
            alt="Background Image"
            layout="responsive"
            width={900}
            height={150}
          />
        </div>

        {/* Bottom Gradient for Blend Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-b from-transparent to-[#11998e]"></div>
      </div>
    </section>
  );
};

export default Hero;