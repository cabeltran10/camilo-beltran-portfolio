import React from "react";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Sections
import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import FooterSection from "./components/Sections/FooterSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
