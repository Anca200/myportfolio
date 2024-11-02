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
        pressStart: ['"Press Start 2P"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px #4acfb4, 0 0 30px #4acfb4, 0 0 45px #4acfb4',
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
  },],
};
