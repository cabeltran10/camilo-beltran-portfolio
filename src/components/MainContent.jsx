import React from 'react';
import HeroSection from './Sections/HeroSection';
import SkillsSection from './Sections/SkillsSection';
import ProjectsSection from './Sections/ProjectsSection';
import AboutSection from './Sections/AboutSection';
import ContactSection from './Sections/ContactSection';

const MainContent = () => (
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>
);

export default MainContent;
