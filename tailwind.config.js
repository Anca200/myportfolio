/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      custom_green_light: '#11998e',
      custom_green_dark: '#2d5c3e',
      },

      backgroundImage:{
gradient_general:'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, #003319 91.1%)',
emerald: 
'radial-gradient(ellipse farthest-corner at right bottom, #00FF99 0%, #00CC66 8%, #006633 30%, #004d26 40%, transparent 80%),' +
'radial-gradient(ellipse farthest-corner at left top, #66FF99 0%, #00FF66 8%, #00CC44 25%, #003319 62.5%, #003319 100%)',

      },

      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.05) translateY(-2px)' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 0.3s ease-in-out', // Smooth transition with a short duration
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        pressStart: ['Press Start 2P', 'sans-serif'],
        marcelus: ["Marcellus", 'serif'],
        glitch: ["Rubik Glitch", 'system-ui']
      },
      boxShadow: {
        neon: '0 0 15px #4acfb4, 0 0 30px #4acfb4, 0 0 45px #4acfb4',
        neon2: '0 0 2px #00FF99, 0 0 10px #00FF99, 0 0 20px #003319, 0 0 40px #003319',
      },
      textShadow: {
        neon: '0 0 2px #4acfb4, 0 0 10px #4acfb4, 0 0 20px #4acfb4, 0 0 40px #4acfb4',
      },
 
      
    },
    //Card Flip
    rotate: {
      'y-180': 'rotateY(180deg)',
    },
    animation: {
      "line-move": "lineMove 8s linear infinite",
    },
    keyframes: {
      lineMove: {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(-100%)" },
      },
      
    },
    
  
  },
  plugins: [  function ({ addUtilities }) {
    addUtilities({
     '.text-shadow-neon': {
          'text-shadow': '0 0 2px #4acfb4, 0 0 10px #4acfb4, 0 0 20px #4acfb4, 0 0 40px #4acfb4',
      },
      
    }
    
  )

  },
   require('tailwindcss-textshadow')],
};
