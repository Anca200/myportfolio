"use client"; // Ensure this is rendered on the client side

import React from "react";
import { motion } from "framer-motion";

const AnimatedLines = () => {
  const lines = Array.from({ length: 20 }); // Fewer lines to reduce clutter

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {lines.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-gradient-to-b from-[rgba(0,255,162,0.83)] to-[#00ffdda5]"
          initial={{ y: "-100%", x: 0 }} // Start from the top with no horizontal offset
          animate={{ y: "100%", x: ["0%", "-1%", "1%", "0%"] }} // Add slight horizontal waviness
          transition={{
            duration: 4 + Math.random() * 4, // Random duration for each line
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 2, // Random delay for each line
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`, // Random width between 1px and 4px
            height: "120%", // Full height to give a continuous flow
            opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
            left: `${Math.random() * 100}vw`, // Random horizontal position
            boxShadow: "0 0 8px rgba(0, 255, 223, 0.6), 0 0 12px rgba(0, 255, 163, 0.8)", // Glow effect
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;