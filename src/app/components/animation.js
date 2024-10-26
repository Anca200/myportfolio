"use client"; // Ensure this is rendered on the client side
import React from "react";
import { motion } from "framer-motion";

const AnimatedLines = () => {
  const lines = Array.from({ length: 15 }); // Fewer lines for less density

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 h-full">
      {lines.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-b from-[rgba(0,255,162,0.83)] to-[#00ffdda5]"
          initial={{ y: "-100%", x: 0 }}
          animate={{ y: "100%", x: ["0%", "-1%", "1%", "0%"] }}
          transition={{
            duration: 6 + Math.random() * 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            width: `${Math.random() * 2 + 1}px`, // Thin lines
            height: "60vh", // Shorter height for each line
            opacity: Math.random() * 0.3 + 0.3, // Lower opacity for subtler effect
            left: `${Math.random() * 90}vw`, // More randomness in position
            boxShadow: "0 0 8px rgba(0, 255, 223, 0.6), 0 0 12px rgba(0, 255, 163, 0.8)", // Glow effect
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;