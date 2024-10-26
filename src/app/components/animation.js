"use client"; // Ensure this is rendered on the client side
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedLinesWithText = () => {
  const [lines, setLines] = useState([]);
  
  // Define an array of neon colors for the lines
  const colors = [
    "rgba(0, 255, 162, 0.83)",  // Neon Green
    "rgba(0, 255, 255, 0.83)",  // Neon Cyan
    "rgba(0, 191, 255, 0.83)",  // Neon Sky Blue
    "rgba(0, 255, 127, 0.83)"   // Neon Spring Green
  ];

  // Generate lines with random colors
  const generateLines = () => {
    return Array.from({ length: 15 }, () => ({ // Increased number of lines to 15
      width: `${Math.random() * 4 + 2}px`, // Thicker lines (between 2 and 6 pixels)
      height: `${Math.random() * 60 + 40}px`, // Longer lines (between 40 and 100 pixels)
      left: `${Math.random() * 100}vw`, // Random x position
      opacity: Math.random() * 0.3 + 0.4, // Random opacity for slight variations
      duration: 4 + Math.random() * 2, // Animation duration (4 to 6 seconds)
      color: colors[Math.floor(Math.random() * colors.length)] // Random color from the array
    }));
  };

  useEffect(() => {
    // Initialize lines on component mount
    setLines(generateLines());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 h-full">
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="absolute"
            initial={{ y: "-100%" }} // Start from above the viewport
            animate={{ y: "100vh" }} // Animate to the full height of the viewport
            transition={{
              duration: line.duration, // Use the random duration
              ease: "linear",
              repeat: Infinity, // Infinite repeat for continuous effect
              delay: Math.random() * 2, // Randomize delay to stagger starts
            }}
            style={{
              width: line.width, // Set line width
              height: line.height, // Set random height
              opacity: line.opacity,
              left: line.left,
              background: line.color, // Set random color for each line
              boxShadow: "0 0 8px rgba(0, 255, 223, 0.6), 0 0 12px rgba(0, 255, 163, 0.8)", // Glow effect
              position: 'absolute', // Set absolute positioning
            }}
          />
          {/* Add zeros and ones overlay */}
          <motion.div
            className="absolute text-white font-mono text-2xl" // Adjust font style and size as needed
            style={{
              left: line.left, // Align text with the line
              top: `calc(-20px + ${Math.random() * 100}vh)`, // Randomize vertical start position above viewport
              opacity: line.opacity,
              color: line.color, // Match the color of the line
            }}
            initial={{ y: "-100%" }} // Start from above the viewport
            animate={{ y: "100vh" }} // Animate to the full height of the viewport
            transition={{
              duration: line.duration, // Use the random duration
              ease: "linear",
              repeat: Infinity, // Infinite repeat for continuous effect
              delay: 0, // Remove initial delay for smoother entrance
            }}
          >
            {Math.random() < 0.5 ? "0" : "1"} {/* Randomly display 0 or 1 */}
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedLinesWithText;