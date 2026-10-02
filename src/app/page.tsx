'use client';

import SmoothScroll from '../components/layout/SmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';
import ScrollProgress from '../components/ui/ScrollProgress';
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import ResumeEducation from '../components/sections/ResumeEducation';
import SkillsMatrix from '../components/sections/SkillsMatrix';
import ExperienceSection from '../components/sections/ExperienceSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0e0e13] text-white selection:bg-[#C0DCBC] selection:text-[#0e0e13]">
        {/* Subtle developer enhancements */}
        <CustomCursor />
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections (Zelio Layout) */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <Services />
          <ProjectsShowcase />
          <ResumeEducation />
          <SkillsMatrix />
          <ExperienceSection />
          <BlogSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
