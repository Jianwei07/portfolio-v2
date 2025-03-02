// components/About.tsx
"use client";
import { FC } from "react";
import AboutSection from "./AboutSection";
import { AboutData } from "@/types/about";
import AboutIntro from "./AboutIntro";
import Header from "./Header";

interface AboutProps {
  about?: AboutData[];
}

const About: FC<AboutProps> = ({ about = [] }) => {
  // Sort sections by order property
  const sortedSections = [...about].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-amber-50 min-h-screen">
      <Header
        activeSection="about"
        scrollToHome={() => (window.location.href = "/")}
        scrollToContact={() => (window.location.href = "/#projects")}
        scrollToProjects={() => (window.location.href = "/#contact")}
      />
      {/* Hero introduction */}
      <AboutIntro />
      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="w-full max-w-4xl mx-auto  border-amber-200"></div>
      </div>
      {/* About Sections */}
      {sortedSections.map((section, index) => (
        <AboutSection
          key={section.id}
          about={section}
          isEven={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default About;
