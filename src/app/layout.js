import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./Landing/Hero";
import About from "./Landing/About";
import Projects from "./Landing/Projects";
import DotNavigation from "./components/DotNavigations";
import AnimatedLines from "./components/animation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script:wght@400;500;600;700&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <AnimatedLines /> {/* Place here to make it span entire layout */}
        <Hero />
        <DotNavigation />
        <About />
        <Projects />
        {children}
      </body>
    </html>
  );
}